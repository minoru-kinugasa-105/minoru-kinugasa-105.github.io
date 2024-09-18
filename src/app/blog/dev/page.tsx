import Image from 'next/image';
import Link from 'next/link';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/css/layout/article.scss';
import '@/css/object/component/tag.scss';

export default function Article() {
    return (
        <section className="article">
            <h1 className="article-title"></h1>
            <div className="article-author">
                <Image
                    src={`/images/blog/icon.png`}
                    width={50}
                    height={50}
                    alt="Author"
                    className="author-icon"
                />
                <span className="author-name">みのる</span>
            </div>
            <ul className="article-tag">
                <li className="tag-gray">
                    <Link href="#">Git</Link>
                </li>
            </ul>
            <hr />







            <div className="article-content">
                <h1>
                    ローカルでブランチを切らずに開発を進めてしまったときの話
                </h1>
                <p>
                    こんにちは！！<br />
                    今回は、ローカルでブランチを切らずに開発を進めてしまったとき、どうやってpushしたのかとその後どうしたかなどをゆるーく話したいとおもいます！<br />
                </p>
                <p>
                    みなさんは、Git、GitHubを使った開発はされていますか？<br />
                    僕はもうバリバリ使うんですが、先輩との共同開発でついにやらかしたと思いました... <br />
                </p>
                <h2>
                    何が起こったのか
                </h2>
                <p>
                    まず、新しい機能を作成するときにはブランチを分けて開発するのが基本ですよね<br />
                    しかしこのとき何故か、疲れていたのかブランチを切らずにmasterブランチで開発を進めてしまいました... <br />
                    <br />
                    それが起きると何がまずいかというと、まずmasterブランチに
                </p>
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
                        <h4>いんとろ</h4>
                        <p>ああああああああああああああああああああああああ</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
