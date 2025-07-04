import {getPostBySlug} from "@/lib/articles";
import MarkdownRenderer from "./utils/MarkdownRenderer";
import {LinkConfig} from "./configs/LinkConfig";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const {title, description, keywords} = await getPostBySlug("mainContent");

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://frontend-content.ru`,
        },
    };
}

export default async function Home() {
    const {content} = await getPostBySlug("mainContent");

    return (
        <article>
            <MarkdownRenderer
                markdownContent={content}
                variables={LinkConfig}
            />
        </article>
    );
}
