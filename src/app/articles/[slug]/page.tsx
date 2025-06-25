import MarkdownRenderer from "@/app/utils/MarkdownRenderer";
import {getPostBySlug, getAllPosts, Post} from "@/lib/articles";
import {notFound} from "next/navigation";

export async function generateStaticParams(): Promise<Array<{slug: string}>> {
    const posts = getAllPosts();

    return posts.map((post) => ({slug: post.slug}));
}

export default async function PostPage(props: any) {
    const {params} = await props;
    const {slug} = await params;
    const post: Post | null = await getPostBySlug(slug).catch(() => null);

    if (!post) return notFound;

    return (
        <article>
            <MarkdownRenderer markdownContent={post.content} />
        </article>
    );
}
