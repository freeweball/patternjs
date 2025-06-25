import {getPostBySlug} from "@/lib/articles";
import MarkdownRenderer from "./utils/MarkdownRenderer";

export default async function Home() {
    const {content} = await getPostBySlug("mainContent");

    return (
        <article>
            <MarkdownRenderer markdownContent={content} />
        </article>
    );
}
