import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
// 型定義
interface Post {
    slug: string;
    title: string;
    content: string;
}

// データを取得する関数
async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

// 動的パラメータを生成する関数
export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}

// コンポーネント
const PostPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const posts = await getPosts();
    const post = posts.find(post => post.slug === slug);

    if (!post) {
        notFound(); // スラグが見つからない場合は404
    }

    return (
        <>
            <Header />

            <main>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </main>

            <Footer />
        </>
    );
};

export default PostPage;
