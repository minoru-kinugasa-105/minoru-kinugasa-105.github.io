type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'PortfolioにBlogをつけたサイトです！',
        imageUrl: '/images/icon.png',
    },
    {
        id: 2,
        title: 'QuickScript',
        description: 'QuickScript: まだ公開はしていませんが、discordのbotをローコードで作成、ホスティングができるサービスです！',
        imageUrl: '/images/QuickSCriptThumb.png',
    },
];

import React from 'react';
import Image from 'next/image';

import '@/css/object/component/section.scss';
import '@/css/layout/works.scss';

export default function Works() {
    return (
        <section className="section works" id="works">
            <h1 className="section-title">
                <span className="title-text">Works</span>
                <span className="subtitle-text">成果物・開発中</span>
            </h1>
            <div className="main works-main">
                {/* 使用技術を描く、border-radiusで遊ぶ */}
                <div className="works-card">
                    <div className="works-headline">
                        <div className="headline-imgbox">
                            <Image
                                className="headline-img"
                                src="/images/transparent-icon.png"
                                width={100}
                                height={100}
                                alt="works-img"
                            />
                        </div>
                        <span className="headline-title">Portfolio</span>
                    </div>
                    <div className="works-desc">
                        <h2 className="desc-title">Portfolio</h2>
                        <p className="desc-explanation">
                            PortfolioにBlogをつけたサイトです！
                        </p>
                    </div>
                </div>
                <div className="works-card">
                    <div className="works-headline">
                        <div className="headline-imgbox">
                            <Image
                                className="headline-img"
                                src="/images/QuickScript.png"
                                width={80}
                                height={80}
                                alt="works-img"
                            />
                        </div>
                        <span className="headline-title">QuickScript</span>
                    </div>
                    <div className="works-desc">
                        <h2 className="desc-title">QuickScript</h2>
                        <p className="desc-explanation">
                            開発中ですが、DiscordのBotをローコードで作成でき、ホスティングができるサービスです。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}