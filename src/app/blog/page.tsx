import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import axios from 'axios';

import '@/css/object/component/card.scss';
import '@/css/object/component/tag.scss';
import '@/css/object/component/section.scss';
import '@/css/layout/blog.scss';

import Post from '@/types/PostType';
import QiitaPost from '@/types/QiitaPostType';

const BASE_URL = 'https://qiita.com/api/v2/users';
const userId = 'minoru_kinugasa';
const API_TOKEN = '571568e50099fb5c673a6b55f593d89effe98182';

async function getPosts(): Promise<(Post | QiitaPost)[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return jsonData ? JSON.parse(jsonData) : [];
}

async function fetchQiitaPosts(): Promise<QiitaPost[]> {
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
        console.error('記事の取得中にエラーが発生しました:', error);
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

export default async function Blog() {
    const posts = await getPosts();
    const qiitaPosts = await fetchQiitaPosts();

    // 各QiitaポストのOGPデータを取得
    const qiitaPostData = await Promise.all(qiitaPosts.map(post => fetchOGData(post.url)));

    return (
        <main>
            <section className="section first-section blog">
                <h1 className="section-title">
                    <span className="title-text">Blog</span>
                    <span className="subtitle-text">気まぐれに更新します！</span>
                </h1>
                <div className="main blog-main">
                    <div className="blog-article">
                        {posts.map((post) => (
                            <article key={(post as Post).slug} className="card">
                                <div className="card-imgbox">
                                    <img
                                        src={post.thumbnail.startsWith('http') ? `${post.thumbnail}` : `/images/blog/${post.thumbnail}`}
                                        alt="article image"
                                        className="card-img"
                                    />
                                </div>
                                <Link href={`/blog/${(post as Post).slug}`} className="card-explanation">
                                    <h2 className="card-title">{post.title}</h2>
                                    <h3 className="card-desc">{post.description}</h3>
                                </Link>
                                <div className="card-footer">
                                    <ul className="card-taglist">
                                        {(post as Post).tag.map((tag: { name: string; color: string }) => (
                                            <li key={tag.name} className={`card-tag ${tag.color}`}>
                                                <Link href={`/blog/tag/${tag.name}`}>{tag.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="card-date">{(post as Post).posted}</span>
                                </div>
                            </article>
                        ))}

                        {qiitaPostData.map((qiitaPost, index) => (
                            <article key={index} className="card">
                                <div className="card-imgbox">
                                    <img
                                        src={qiitaPost.thumbnail.startsWith('http') ? `${qiitaPost.thumbnail}` : `/images/blog/${qiitaPost.thumbnail}`}
                                        alt="article image"
                                        className="card-img"
                                    />
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
}
