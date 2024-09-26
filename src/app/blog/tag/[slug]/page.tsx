import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Post from '@/types/PostType';
import QiitaPost from '@/types/QiitaPostType';
import axios from 'axios';

import '@/css/object/component/tag.scss';
import '@/css/object/component/card.scss';
import '@/css/object/component/section.scss';
import '@/css/layout/blog.scss';

const BASE_URL = 'https://qiita.com/api/v2/users';
const userId = 'minoru_kinugasa';
const API_TOKEN = '571568e50099fb5c673a6b55f593d89effe98182';

async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export async function generateStaticParams() {
    const posts = await getPosts();
    const tags = new Set<string>();
    posts.forEach((post) => {
        post.tag.forEach((tag) => {
            tags.add(tag.name);
        });
    });
    return Array.from(tags).map((tag) => ({
        slug: tag,
    }));
}

async function fetchQiitaPosts(tag: string): Promise<QiitaPost[]> {
    try {
        const response = await axios.get(`${BASE_URL}/${userId}/items`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
        });

        return response.data.map((article: { url: string }) => ({
            url: article.url,
        }));
    } catch (error) {
        console.error('Error fetching Qiita articles:', error);
        return [];
    }
}

async function fetchOGData(url: string): Promise<QiitaPost> {
    const qiitaPost: QiitaPost = {
        title: '',
        description: '',
        thumbnail: '',
        url,
    };

    try {
        const { data: html } = await axios.get(url);
        const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]*)"/);
        const ogDescriptionMatch = html.match(/<meta property="og:description" content="([^"]*)"/);
        const ogImageMatch = html.match(/<meta property="og:image" content="([^"]*)"/);

        qiitaPost.title = ogTitleMatch ? ogTitleMatch[1] : '';
        qiitaPost.description = ogDescriptionMatch ? ogDescriptionMatch[1] : '';
        qiitaPost.thumbnail = ogImageMatch ? ogImageMatch[1].replace(/&amp;/g, '&') : '';

        if (!qiitaPost.title || !qiitaPost.description || !qiitaPost.thumbnail) {
            console.warn(`OG data incomplete for URL: ${url}`);
        }
    } catch (error) {
        console.error('Failed to fetch OG data:', error);
    }

    return qiitaPost;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    return {
        title: `🔍: '${slug}'の検索結果`,
        description: 'タグ一覧ページです。',
    };
}

const TagPage = async ({ params }: { params: { slug: string } }) => {
    const slug = decodeURI(params.slug);
    const posts = await getPosts();

    const filteredLocalPosts = posts.filter(post =>
        post.tag.some(tag => tag.name === slug)
    );

    let qiitaPostData: QiitaPost[] = [];
    if (/^qiita$/i.test(slug)) {
        const qiitaPosts = await fetchQiitaPosts(slug);
        qiitaPostData = await Promise.all(qiitaPosts.map(post => fetchOGData(post.url)));
    }

    if (filteredLocalPosts.length === 0 && qiitaPostData.length === 0) {
        return (
            <main className="article-main">
                <section className="section blog">
                    <h1 className="section-title">
                        <span className="title-text">{slug}</span>
                        <span className="subtitle-text">タグ検索: "{slug}"の結果</span>
                    </h1>
                    <p className="blog-notfound">{slug}というタグは見つかりませんでした。</p>
                </section>
            </main>
        );
    }

    return (
        <main className="article-main">
            <section className="section blog">
                <h1 className="section-title">
                    <span className="title-text">{slug}</span>
                    <span className="subtitle-text">タグ検索: "{slug}"の結果</span>
                </h1>
                <div className="main blog-main">
                    <div className="blog-article">
                        {filteredLocalPosts.map((post) => (
                            <article key={post.slug} className="card">
                                <div className="card-imgbox">
                                    <Image
                                        src={post.thumbnail.startsWith('http') ? post.thumbnail : `/images/blog/${post.thumbnail}`}
                                        width={100}
                                        height={80}
                                        alt="article image"
                                        className="card-img"
                                    />
                                </div>
                                <Link href={`/blog/${post.slug}`} className="card-explanation">
                                    <h2 className="card-title">{post.title}</h2>
                                    <h3 className="card-desc">{post.description}</h3>
                                </Link>
                                <div className="card-footer">
                                    <ul className="card-taglist">
                                        {post.tag.map((tag) => (
                                            <li key={tag.name} className={`card-tag ${tag.color}`}>
                                                <Link href={`/blog/tag/${tag.name}`}>{tag.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="card-date">{post.posted}</span>
                                </div>
                            </article>
                        ))}
                        {qiitaPostData.map((qiitaPost, index) => (
                            <article key={index} className="card">
                                <div className="card-imgbox">
                                    <img src={qiitaPost.thumbnail.startsWith('http') ? qiitaPost.thumbnail : `/images/blog/${qiitaPost.thumbnail}`} alt="article image" className="card-img" />
                                </div>
                                <a href={qiitaPost.url} className="card-explanation" target="_blank" rel="noopener noreferrer">
                                    <h2 className="card-title">{qiitaPost.title}</h2>
                                    <h3 className="card-desc">{qiitaPost.description}</h3>
                                </a>
                                <div className="card-footer">
                                    <ul className="card-taglist">
                                        <li key="qiita" className="card-tag tag-limegreen">
                                            <Link href={`/blog/tag/Qiita`}>Qiita</Link>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TagPage;
