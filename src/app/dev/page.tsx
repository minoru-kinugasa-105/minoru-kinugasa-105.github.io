import Image from 'next/image';
import Link from 'next/link';

import '@/css/object/component/section.scss';
import '@/css/layout/develop.scss';

export default function Developer() {
    return (
        <main>
            <section className="section first-section develop">
                <h1 className="section-title">
                    <span className="title-text">Develop</span>
                    <span className="subtitle-text">開発者がつかうところ</span>
                </h1>
                <div className="main develop-main">
                    え、よくこのディレクトリ見つけましたね...
                    <br />
                    でもここは開発者が開発に使ってるところなので何もないです...() <br />
                </div>
            </section>
        </main>
    );
}