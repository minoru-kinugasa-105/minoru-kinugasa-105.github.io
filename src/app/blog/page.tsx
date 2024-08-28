import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/css/object/component/card.scss";
import "@/css/object/component/tag.scss";

export default function Blog() {

    return (
        <>
            <Header />

            <main>
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
            </main>

            <Footer />
        </>
    )
}