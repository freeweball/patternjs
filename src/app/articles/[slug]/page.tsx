import {LinkConfig} from "@/app/configs/LinkConfig";
import MarkdownRenderer from "@/app/utils/MarkdownRenderer";
import {getPostBySlug, getAllPosts, Post} from "@/lib/articles";
import {Metadata} from "next";
import {notFound} from "next/navigation";

export async function generateStaticParams(): Promise<Array<{slug: string}>> {
    const posts = getAllPosts();

    return posts.map((post) => ({slug: post.slug}));
}

export async function generateMetadata(props: any): Promise<Metadata> {
    const {params} = await props;
    const {slug} = await params;
    const post: Post | null = await getPostBySlug(slug).catch(() => null);

    if (!post) return notFound();

    return {
        title: post.name,
        description: `Статья о паттерне ${post.name} из категории ${post.category} паттерны`,
        keywords: post.keywords,
        alternates: {
            canonical: `https://frontend-content.ru/articles/${slug}`,
        },
    };
}

export default async function PostPage(props: any) {
    const {params} = await props;
    const {slug} = await params;
    const post: Post | null = await getPostBySlug(slug).catch(() => null);

    if (!post) return notFound();

    return (
        <article>
            <MarkdownRenderer
                markdownContent={post.content}
                variables={LinkConfig}
            />
        </article>
    );
}
