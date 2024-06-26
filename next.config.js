/** @type {import('next').NextConfig} */

const path = require('path')


const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	i18n: {
		locales: ["uz", "ru", "en"],
		defaultLocale: "ru",
	},
	images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
            },
        ],
    },
}

module.exports = nextConfig