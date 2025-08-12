import {getArticleByPath, getSlugsFromPath} from "@/lib/articles";
import {LinkConfig} from "../configs/LinkConfig";
import MarkdownRenderer from "./MarkdownRenderer";
import {notFound} from "next/navigation";

export const getArticlePageConfig = (basePath: string) => ({
    generateStaticParams: async () => {
        return getSlugsFromPath(basePath).map((article) => ({slug: article.slug}));
    },

    generateMetadata: async (props: any) => {
        const params = await props.params;
        const slug = basePath === "" ? "index" : await params.slug;
        const {title, description, keywords} = await getArticleByPath(`${basePath}/${slug}`);

        return {
            title,
            description,
            keywords,
            alternates: {
                canonical: `${LinkConfig.siteUrl}${basePath}/${slug}/`,
            },
        };
    },

    Page: async function (props: any) {
        const params = await props.params;
        const slug = basePath === "" ? "index" : await params.slug;
        const {content} = await getArticleByPath(`${basePath}/${slug}`);

        if (!content) return notFound();

        return (
            <article>
                <MarkdownRenderer markdownContent={content} variables={LinkConfig} />
            </article>
        );
    },
});
