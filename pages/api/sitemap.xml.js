import {
    getAllPages
} from './pages'; // Замените на вашу функцию получения данных

export default async (req, res) => {
    const pages = await getAllPages() // Замените на вашу функцию получения данных


    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
    </head>
    <body>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n
    `;

    pages.forEach((page) => {
        xml += '<url>\n';
        xml += `<loc>https://dotlabs.uz/pages${page.slug}</loc>\n`;
        xml += `<lastmod>${page.lastModified}</lastmod>\n`;
        xml += '<changefreq>daily</changefreq>\n';
        xml += '<priority>0.7</priority>\n';
        xml += '</url>\n';
    });

    xml += `
        </urlset>
        </body>
        </html>
    `;

    res.setHeader('Content-Type', 'application/xml');
    res.send(xml);
};