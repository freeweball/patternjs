import MarkdownRenderer from "@/app/utils/MarkdownRenderer";
import {getPostBySlug, getAllPosts, Post} from "@/lib/articles";
import {notFound} from "next/navigation";

interface PostPageProps {
    params: {
        slug: string;
    };
}

// Эта функция вызывается автоматически Next.js на этапе сборки
// Она возвращает список всех возможных параметров, чтобы сгенерировать страницы
export async function generateStaticParams(): Promise<Array<{slug: string}>> {
    const posts = getAllPosts();

    return posts.map((post) => ({slug: post.slug}));
}

export default async function PostPage(props: any) {
    const {params} = await props;
    const {slug} = await params;
    const post: Post | null = await getPostBySlug(slug).catch(() => null);

    if (!post) return notFound;

    const {title, date, content} = post;

    return (
        <article>
            {/* <h1>{title}</h1>
            <p>{date}</p> */}
            <MarkdownRenderer markdownContent={content} />
        </article>
    );
}
