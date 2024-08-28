import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/css/object/component/card.scss";
import "@/css/object/component/tag.scss";
import "@/css/object/component/section.scss";
import "@/css/layout/blog.scss";

interface Post {
    slug: string;
    title: string;
}

async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

export default async function Blog() {
    const posts = await getPosts();

    return (
        <>
            <Header />

            <main>
                <section className="section blog">
                    <h1 className="section-title">
                        <span className="title-text">
                            Blog
                        </span>
                        <span className="subtitle-text">
                            気まぐれに更新します！
                        </span>
                    </h1>
                    <div className="main blog-main">
                        {/* <div className="blog-article">
                        <article className="card big-card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>

                        <article className="card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>

                        <article className="card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>

                        <article className="card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>

                        <article className="card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>

                        <article className="card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>

                        <article className="card big-card">
                            <div className="card-imgbox">
                                <Image
                                    src="/images/icon.png"
                                    width={100}
                                    height={80}
                                    alt="article image"
                                    className="card-img"
                                />
                            </div>
                            <Link href="/" className="card-explanation">
                                <h2 className="card-title">
                                    QuickScript
                                </h2>
                                <h3 className="card-desc">
                                    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
                                </h3>
                            </Link>
                            <div className="card-footer">
                                <ul className="card-taglist">
                                    <li className="card-tag tag-limegreen">
                                        <Link href="#tag">
                                            React
                                        </Link>
                                    </li>
                                    <li className="card-tag tag-green">
                                        <Link href="#tag">
                                            Vue
                                        </Link>
                                    </li>
                                </ul>
                                <span className="card-date">
                                    26 Feb 2024
                                </span>
                            </div>
                        </article>
                        </div> */}
                        <ul>
                            {posts.map((post) => (
                                <li key={post.slug}>
                                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="blog-pagination">
                            <Link href="">«</Link>
                            <Link href="">1</Link>
                            <Link href="">2</Link>
                            <Link href="">3</Link>
                            <Link href="">4</Link>
                            <Link href="">5</Link>
                            <Link href="">»</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}