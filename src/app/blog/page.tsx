import Image from 'next/image';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';

import '@/css/object/component/card.scss';
import '@/css/object/component/tag.scss';
import '@/css/object/component/section.scss';
import '@/css/layout/blog.scss';

import Post from '@/types/PostType';

async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return jsonData ? JSON.parse(jsonData) : undefined;
}

export default async function Blog() {
    const posts = await getPosts();

    return (
        <main>
            <section className="section first-section blog">
                <h1 className="section-title">
                    <span className="title-text">Blog</span>
                    <span className="subtitle-text">
                        気まぐれに更新します！
                    </span>
                </h1>
                <div className="main blog-main">
                    <div className="blog-article">
                        {posts
                            ? posts.map((post, index) => (
                                  <article
                                      key={post.slug}
                                      className={`card ${index === 0 ? 'big-card' : ''}`}
                                  >
                                      <div className="card-imgbox">
                                          <Image
                                              src={`/images/blog/${post.thumbnail}`}
                                              width={100}
                                              height={80}
                                              alt="article image"
                                              className="card-img"
                                          />
                                      </div>
                                      <Link
                                          href={`/blog/${post.slug}`}
                                          className="card-explanation"
                                      >
                                          <h2 className="card-title">
                                              {post.title}
                                          </h2>
                                          <h3 className="card-desc">
                                              {post.description}
                                          </h3>
                                      </Link>
                                      <div className="card-footer">
                                          <ul className="card-taglist">
                                              {post.tag.map(
                                                  (tag: {
                                                      name: string;
                                                      color: string;
                                                  }) => (
                                                      <li
                                                          key={tag.name}
                                                          className={`card-tag ${tag.color}`}
                                                      >
                                                          <Link
                                                              href={`/blog/tag/${tag.name}`}
                                                          >
                                                              {tag.name}
                                                          </Link>
                                                      </li>
                                                  )
                                              )}
                                          </ul>
                                          <span className="card-date">
                                              {post.posted}
                                          </span>
                                      </div>
                                  </article>
                              ))
                            : ''}
                    </div>
                    {posts ? (
                        ''
                    ) : (
                        <p className="blog-notfound">
                            まだ記事はないようです、、、
                        </p>
                    )}

                    {/* {
                            posts ? (
                                <div className="blog-pagination">
                                    <Link href="">«</Link>
                                    <Link href="">1</Link>
                                    <Link href="">2</Link>
                                    <Link href="">3</Link>
                                    <Link href="">4</Link>
                                    <Link href="">5</Link>
                                    <Link href="">»</Link>
                                </div>
                            ) : ""
                        } */}
                </div>
            </section>
        </main>
    );
}
