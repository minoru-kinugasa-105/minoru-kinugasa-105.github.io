import Image from "next/image";
import Link from "next/link";

import "@/css/layout/header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header-headline">
                <Image
                    src="/images/icon.png"
                    alt="minoru's icon"
                    width={45}
                    height={45}
                    className="headline-img"
                />
                <span className="headline-name">
                    minoru-kinugasa
                </span>
            </div>
            <nav className="header-nav">
                <ul className="header-navlist">

                    <li className="header-navlist-desc">
                        <Link
                            href="/#about"
                            className="header-navlist-item"
                        >
                            About
                        </Link>
                    </li>

                    <li className="header-navlist-desc">
                        <Link
                            href="/#works"
                            className="header-navlist-item"
                        >
                            Works
                        </Link>
                    </li>

                    <li className="header-navlist-desc">
                        <Link
                            href="/#career"
                            className="header-navlist-item"
                        >
                            Career
                        </Link>
                    </li>

                    <li className="header-navlist-desc">
                        <Link
                            href="/#contact"
                            className="header-navlist-item"
                        >
                            Contact
                        </Link>
                    </li>

                    <li className="header-navlist-desc">
                        <Link
                            href="/blog"
                            className="header-navlist-item"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}