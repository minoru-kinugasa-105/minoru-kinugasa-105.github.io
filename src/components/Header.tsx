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
                            href="/#about"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            About
                        </Link>
                    </li>
                    
                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/#works"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            Works
                        </Link>
                    </li>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/#career"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            Career
                        </Link>
                    </li>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/#contact"
                            className={HeaderStyle["header-navlist-item"]}
                        >
                            Contact
                        </Link>
                    </li>

                    <li className={HeaderStyle["header-navlist-desc"]}>
                        <Link
                            href="/blog"
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