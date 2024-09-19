import Image from 'next/image';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Post from '@/types/PostType';

import '@/css/layout/article.scss';
import '@/css/object/component/tag.scss';

// データを取得する関数
async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

// 動的パラメータを生成する関数
export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// コンポーネント
const PostPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const posts = await getPosts();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        notFound(); // スラグが見つからない場合は404
    }

    return (
        <main className="article-main">
            <section className="article">
                <h1 className="article-title">{post.title}</h1>
                <div className="article-author">
                    <Image
                        src={`/images/blog/${post.author.image}`}
                        width={50}
                        height={50}
                        alt="Author"
                        className="author-icon"
                    />
                    <span className="author-name">{post.author.name}</span>
                </div>
                <ul className="article-tag">
                    {post.tag.map((tag: { name: string; color: string }) => (
                        <li key={tag.name} className={tag.color}>
                            <Link href={`/blog/tag/${tag.name}`}>
                                {tag.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="article-content">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                </div>

                <hr />
                <div className="article-footer">
                    <div className="footer-author">
                        <div className="author-headline">
                            <Image
                                src={`/images/blog/${post.author.image}`}
                                width={50}
                                height={50}
                                alt="Author"
                                className="headline-icon"
                            />
                            <div className="headline-link">
                                <Link href={post.author.twitter}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link href={post.author.mail}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Link>
                            </div>
                        </div>
                        <div className="author-intro">
                            <h4>{post.author.name}</h4>
                            <p>{post.author.intro}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="article-recommendation">
                        <h2>
                            おすすめの記事
                        </h2>
                    </div> */}
            </section>
        </main>
    );
};

export default PostPage;