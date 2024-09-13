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

            <section className="article">
                <h1 className="article-title">
                    
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
                        みのる
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
            </section>

            <Footer />
        </>
    )
}

