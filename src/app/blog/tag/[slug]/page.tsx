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

// データを取得する関数
async function getPosts(): Promise<(Post | QiitaPost)[]> {
    const filePath = path.resolve(process.cwd(), 'data', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

// 動的パラメータを生成する関数
export async function generateStaticParams() {
    const posts = await getPosts();
    const tags = new Set<string>();
    posts.forEach((post) => {
        if (post.type === 'general') {
            (post as Post).tag.forEach((tag) => {
                tags.add(tag.name);
            });
        } else if (post.type === 'qiita') {
            tags.add('Qiita');
        }
    });
    return Array.from(tags).map((tag) => ({
        slug: tag,
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
    let { slug } = params;
    slug = decodeURI(slug);
    const posts = await getPosts();
    const filteredPosts = posts.filter((post) => {
        if (post.type === 'general') {
            return (post as Post).tag.some((tag) => tag.name === slug);
        } else if (post.type === 'qiita') {
            return slug === 'Qiita';
        }
        return false;
    });

    return (
        <main className="article-main">
            <section className="section blog">
                <h1 className="section-title">
                    <span className="title-text">{slug}</span>
                    <span className="subtitle-text">タグ検索: "{slug}"の結果</span>
                </h1>
                <div className="main blog-main">
                    <div className="blog-article">
                        {filteredPosts?.length > 0
                            ? filteredPosts.map(async (post, index) => {
                                  if (post.type === 'general') {
                                      return (
                                          <article key={post.type === 'general' ? (post as Post).slug : index} className="card">
                                              <div className="card-imgbox">
                                                  <Image
                                                      src={post.thumbnail.startsWith('http') ? `${post.thumbnail}` : `/images/blog/${post.thumbnail}`}
                                                      width={100}
                                                      height={80}
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
                                      );
                                  } else if (post.type === 'qiita') {
                                      const qiitaPost: QiitaPost = {
                                          title: '',
                                          description: '',
                                          thumbnail: '',
                                          url: (post as QiitaPost).url,
                                      };

                                      try {
                                          const { data: html } = await axios.get((post as QiitaPost).url);

                                          const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]*)"/);
                                          const ogDescriptionMatch = html.match(/<meta property="og:description" content="([^"]*)"/);
                                          const ogImageMatch = html.match(/<meta property="og:image" content="([^"]*)"/);

                                          qiitaPost.title = ogTitleMatch ? ogTitleMatch[1] : '';
                                          qiitaPost.description = ogDescriptionMatch ? ogDescriptionMatch[1] : '';
                                          qiitaPost.thumbnail = ogImageMatch ? ogImageMatch[1].replace(/&amp;/g, '&') : '';

                                          if (!qiitaPost.title || !qiitaPost.description || !qiitaPost.thumbnail) {
                                              console.warn(`OG data incomplete for URL: ${(post as QiitaPost).url}`);
                                          }
                                      } catch (error) {
                                          console.error('Failed to fetch OG data:', error);
                                      }

                                      return (
                                          <article key={index} className="card">
                                              <div className="card-imgbox">
                                                  <Image
                                                      src={qiitaPost.thumbnail.startsWith('http') ? `${qiitaPost.thumbnail}` : `/images/blog/${qiitaPost.thumbnail}`}
                                                      width={100}
                                                      height={80}
                                                      alt="article image"
                                                      className="card-img"
                                                  />
                                              </div>
                                              <a href={(qiitaPost as QiitaPost).url} className="card-explanation" target="_blank">
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
                                      );
                                  }
                              })
                            : ''}
                    </div>
                    {filteredPosts?.length > 0 ? '' : <p className="blog-notfound">{slug}というタグは見つかりませんでした。</p>}
                </div>
            </section>
        </main>
    );
};

export default TagPage;
