import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
    category?: string;
    name?: string;
    articleId?: string;
    slug: string;
    keywords?: Array<string>;
    title?: string;
    description?: string;
}

export interface Post extends PostMeta {
    content: string;
}

// Получаем абсолютный путь к папке posts из корня проекта
const postsDirectory = path.join(process.cwd(), "articles");

// Получаем список всех статей с мета-данными (без содержимого)
export function getAllPosts(): Array<PostMeta> {
    // Читаем список файлов из директории 'posts'
    const fileNames = fs.readdirSync(postsDirectory);
    // Преобразуем каждый файл в обьект с мета-данными
    return fileNames.map((fileName) => {
        // Убираем расширение '.md', чтобы получить slug (название файла .md => должно совпадать с названием страницы)
        const slug = fileName.replace(/\.md$/, "");
        // Получаем абсолютный путь до файла
        const fullPath = path.join(postsDirectory, fileName);
        // Читаем содержимое файла в виде строки
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        // Разделяем мета-данные и контент
        // const {data} = matter(fileContents);
        // const {title, date} = data;
        const {
            data: {category, name, articleId},
        } = matter(fileContents);

        // Возвращаем только мета-данные и slug
        return {
            slug,
            category,
            name,
            articleId,
        };
    });
}

// Загружаем одну статью по ее slug (имени файла без расширения)
export async function getPostBySlug(slug: string): Promise<Post> {
    // Формируем путь к markdown-файлу по его slug (имени файла)
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    // Читаем содержимое markdown-файла
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    // Разделяем мета-данные и контент
    const {data, content} = matter(fileContents);
    const {name, category, keywords, title, description} = data;
    // const {content} = matter(fileContents);

    return {
        slug,
        content,
        name,
        title,
        description,
        category,
        keywords,
    };
}
