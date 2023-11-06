// pages/sitemap.xml.js
import {
    SitemapStream,
    streamToPromise
} from 'sitemap';
import {
    Readable
} from 'stream';
import {
    getAllPages
} from './api/pages'; // Замените на вашу функцию получения данных

export default async (req, res) => {
    // Создаем поток sitemap
    const smStream = new SitemapStream({
        hostname: 'https://dotlabs.uz', // Замените на свой домен
    });

    // Генерируем страницы на основе данных вашего проекта
    const pages = await getAllPages(); // Замените на вашу функцию получения данных

    pages.forEach((page) => {
        smStream.write({
            url: `/pages/${page.slug}`,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: page.lastModified,
        });
    });

    smStream.end();

    // Отправляем sitemap.xml как ответ
    res.setHeader('Content-Type', 'application/xml');
    const xmlString = (await streamToPromise(Readable.from([smStream]))).toString();
    res.end(xmlString);
};