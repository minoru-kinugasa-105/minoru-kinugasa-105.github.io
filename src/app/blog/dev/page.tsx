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

            <Footer />
        </>
    )
}

