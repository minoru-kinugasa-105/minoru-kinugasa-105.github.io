import { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import Post from "@/types/PostType";

import "@/css/object/component/tag.scss";
import "@/css/object/component/card.scss";
import "@/css/object/component/section.scss";
import "@/css/layout/blog.scss";

// データを取得する関数
async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

// 動的パラメータを生成する関数
export async function generateStaticParams() {
    const posts = await getPosts();
    const tags = new Set<string>();
    posts.forEach(post => {
        post.tag.forEach(tag => {
            tags.add(tag.name);
        });
    });
    return Array.from(tags).map(tag => ({
        slug: tag
    }));
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    return {
        title: `🔍: '${slug}'の検索結果`,
        description: 'タグ一覧ページです。',
    };
}

// コンポーネント
const TagPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const posts = await getPosts();
    const filteredPosts = posts.filter(post => post.tag.some(tag => tag.name === slug));

    return (
        <>
            <Header />

            <main className="article-main">
                <section className="section blog">
                    <h1 className="section-title">
                        <span className="title-text">
                            {slug}
                        </span>
                        <span className="subtitle-text">
                            タグ検索: "{slug}"の結果
                        </span>
                    </h1>
                    <div className="main blog-main">
                        <div className="blog-article">
                            {
                                filteredPosts?.length > 0 ?
                                    (
                                        filteredPosts.map((post, index) => (
                                            <article key={post.slug} className={`card ${filteredPosts.length > 1 && index === 0 ? "big-card" : ""}`}>
                                                <div className="card-imgbox">
                                                    <Image
                                                        src={`/images/blog/${post.thumbnail}`}
                                                        width={100}
                                                        height={80}
                                                        alt="article image"
                                                        className="card-img"
                                                    />
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className="card-explanation">
                                                    <h2 className="card-title">
                                                        {post.title}
                                                    </h2>
                                                    <h3 className="card-desc">
                                                        {post.description}
                                                    </h3>
                                                </Link>
                                                <div className="card-footer">
                                                    <ul className="card-taglist">
                                                        {post.tag.map((tag: { name: string; color: string }) => (
                                                            <li key={tag.name} className={`card-tag ${tag.color}`}>
                                                                <Link href={`/blog/tag/${tag.name}`}>
                                                                    {tag.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <span className="card-date">
                                                        {post.posted}
                                                    </span>
                                                </div>
                                            </article>
                                        ))
                                    ) : ""
                            }
                        </div>
                        {
                            filteredPosts?.length > 0 ? "" :
                                (
                                    <p className="blog-notfound">{slug}というタグは見つかりませんでした。</p>
                                )
                        }
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default TagPage;