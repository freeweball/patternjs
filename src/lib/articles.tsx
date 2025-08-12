import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMetaType = {
    title: string;
    description: string;
    keywords: Array<string>;
    content: string;
};

const rootDir = path.join(process.cwd(), `articles`);

//* Получение всех названий в папке "patterns"
export function getSlugsFromPath(pathName: string) {
    return fs.readdirSync(`${rootDir}/${pathName}`).map((fileName) => ({slug: path.basename(fileName, ".md")}));
}

export async function getArticleByPath(pathName: string): Promise<ArticleMetaType> {
    const fullPath = path.join(rootDir, `${pathName}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    // Разделяем мета-данные и контент
    const {data, content} = matter(fileContents);
    const {title, description, keywords} = data;

    return {
        title,
        description,
        keywords,
        content,
    };
}
