import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Image from "next/image";
import Link from "next/link";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@/css/layout/article.scss";
import "@/css/object/component/tag.scss";




export default function Article() {
    return (
        <>
            <Header />

            <main>
                お、おう<br />
                よくこの開発用ディレクトリ見つけたなおめー<br />
                <br />
                すげーよ、ほめてやるよ<br />
                (ﾟ∀ﾟ)ｱﾋｬ
            </main>
            {/* 
            <section className="article">
    <h1 className="article-title">
        たいとる
    </h1>
    <div className="article-author">
        <Image
            src={`/images/blog/icon.png`}
            width={50}
            height={50}
            alt="Author"
            className="author-icon"
        />
        <span className="author-name">
            おれ
        </span>
    </div>
    <ul className="article-tag">
        <li className="tag-green">
            <Link href="#">
                React
            </Link>
        </li>
    </ul>
    <hr />
    <div className="article-content">

        <h2>てすとBlog</h2><p>この記事は開発段階のBlogの記事となっております！<br />この記事は以下の技術を用いて開発されています。</p><ul><li>React (Next.js)</li><li>Github Pages</li></ul><p>また、このBlogではこの記事を読んでいる人が見やすいデザインにするために独自でデザイン・システムを作成しています。<br />デザインは、<a href="https://www.wowthemes.net/memoirs-free-jekyll-theme/">memoirs-free-jekyll-theme</a>を参考に作成いたしました！</p><p>また、ページの公開に使用しているGithub Pagesですが、Next.jsをデプロイする技術をGithubが提供していたため、それを利用しました。<span className="citation">参照元:<span className="blank"></span><a href="https://github.com/gregrickaby/nextjs-github-pages">https://github.com/gregrickaby/nextjs-github-pages</a></span><small><span className="cancellation"><small>もっとスマートな方法があった気がしてなりません…</small></span></small></p>

    </div>

    <hr />
    <div className="article-footer">
        <div className="footer-author">
            <div className="author-headline">
                <Image
                    src={`/images/blog/icon.png`}
                    width={50}
                    height={50}
                    alt="Author"
                    className="headline-icon"
                />
                <div className="headline-link">
                    <Link href="aaa">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="aaa">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>
            </div>
            <div className="author-intro">
                <h4>
                    いんとろ
                </h4>
                <p>
                    ああああああああああああああああああああああああ
                </p>
            </div>
        </div>
    </div>
</section> */}

            <Footer />
        </>
    )
}

