// pages/api/pages.js

// Здесь вы можете использовать любой способ получения данных о страницах.
// Это может быть запрос к базе данных, чтение файлов или другие методы.

export async function getAllPages() {
	// Вернуть данные о страницах, например, в виде массива объектов.
	return [
		{ slug: "/", lastModified: "2023-11-04" },
		{ slug: "/about", lastModified: "2023-11-05" },
		{ slug: "/portfolio", lastModified: "2023-11-05" },
		{ slug: "/services", lastModified: "2023-11-05" },
		{ slug: "/contact", lastModified: "2023-11-05" },
		// Добавьте другие страницы здесь
	];
}
