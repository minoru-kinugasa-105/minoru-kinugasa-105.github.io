import Link from 'next/link';

import { promises as fs } from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';

import '@/css/object/component/card.scss';
import '@/css/object/component/tag.scss';
import '@/css/object/component/section.scss';
import '@/css/layout/blog.scss';

import Post from '@/types/PostType';
import QiitaPost from '@/types/QiitaPostType';

async function getPosts(): Promise<Post[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return jsonData ? JSON.parse(jsonData) : undefined;
}

export default async function Blog() {
    const posts = await getPosts();

    const filePath = path.resolve(process.cwd(), 'data', 'qiita.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const qiitaUrls = JSON.parse(jsonData).url;

    let ogData = {
        title: '',
        description: '',
        imageURL: '',
    };

    const qiitaPosts: QiitaPost[] = [];

    for (const url of qiitaUrls) {
        try {
            const { data: html } = await axios.get(url);

            const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]*)"/);
            const ogDescriptionMatch = html.match(/<meta property="og:description" content="([^"]*)"/);
            const ogImageMatch = html.match(/<meta property="og:image" content="([^"]*)"/);

            ogData.title = ogTitleMatch ? ogTitleMatch[1] : '';
            ogData.description = ogDescriptionMatch ? ogDescriptionMatch[1] : '';
            ogData.imageURL = ogImageMatch ? ogImageMatch[1].replace(/&amp;/g, '&') : '';

            if (!ogData.title || !ogData.description || !ogData.imageURL) {
                console.warn(`OG data incomplete for URL: ${url}`);
            }
            qiitaPosts.push({
                title: ogData.title,
                description: ogData.description,
                thumbnail: ogData.imageURL,
                url: url,
            });
        } catch (error) {
            console.error('Failed to fetch OG data:', error);
        }
    }

    return (
        <main>
            <section className="section first-section blog">
                <h1 className="section-title">
                    <span className="title-text">Blog</span>
                    <span className="subtitle-text">気まぐれに更新します！Qiitaの記事も混入してるのでよろしくです！</span>
                </h1>
                <div className="main blog-main">
                    <div className="blog-article">
                        {posts
                            ? posts.map((post, index) => (
                                  <article key={post.slug} className={`card ${index === 0 ? 'big-card' : ''}`}>
                                      <div className="card-imgbox">
                                          <img src={post.thumbnail.startsWith('http') ? `${post.thumbnail}` : `/images/blog/${post.thumbnail}`} alt="article image" className="card-img" />
                                      </div>
                                      <Link href={`/blog/${post.slug}`} className="card-explanation">
                                          <h2 className="card-title">{post.title}</h2>
                                          <h3 className="card-desc">{post.description}</h3>
                                      </Link>
                                      <div className="card-footer">
                                          <ul className="card-taglist">
                                              {post.tag.map((tag: { name: string; color: string }) => (
                                                  <li key={tag.name} className={`card-tag ${tag.color}`}>
                                                      <Link href={`/blog/tag/${tag.name}`}>{tag.name}</Link>
                                                  </li>
                                              ))}
                                          </ul>
                                          <span className="card-date">{post.posted}</span>
                                      </div>
                                  </article>
                              ))
                            : ''}
                        {qiitaPosts
                            ? qiitaPosts.map((post, index) => (
                                  <article key={index} className="card">
                                      <div className="card-imgbox">
                                          <img src={post.thumbnail.startsWith('http') ? `${post.thumbnail}` : `/images/blog/${post.thumbnail}`} alt="article image" className="card-img" />
                                      </div>
                                      <a href={post.url} className="card-explanation" target='_blank'>
                                          <h2 className="card-title">{post.title}</h2>
                                          <h3 className="card-desc">{post.description}</h3>
                                      </a>
                                      <div className="card-footer">
                                          <ul className="card-taglist">
                                              <li key="qiita" className="card-tag tag-limegreen">
                                                  <Link href={`/blog/tag/qiita`}>Qiita</Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </article>
                              ))
                            : ''}
                    </div>

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
