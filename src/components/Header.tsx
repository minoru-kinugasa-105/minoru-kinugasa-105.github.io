import Image from "next/image";
import Link from "next/link";
import HeaderStyle from "@/css/layout/header.module.scss";

export default function Header() {
    return (
        <header className={HeaderStyle["header"]}>
            <div className={HeaderStyle["header-headline"]}>
                <Image
                    src="/images/icon.png"
                    alt="minoru's icon"
                    width={45}
                    height={45}
                    className={HeaderStyle["headline-img"]}
                />
                <span className={HeaderStyle["headline-name"]}>
                    minoru-kinugasa
                </span>
            </div>
            <nav className={HeaderStyle["header-nav"]}>
                <ul className={HeaderStyle["header-navlist"]}>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/about"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            About {/* 使用できる技術もここにかく */}
                        </Link>
                    </li>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/about"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            Works {/* 成果物と、作ってるもの　作ってるやつは 未公開　開発中　みたいなタグを付けておきたい */}
                        </Link>
                    </li>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/about"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            Career {/* 経験、まぁ、今までの経歴をのせる */}
                        </Link>
                    </li>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/about"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            Blog
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}