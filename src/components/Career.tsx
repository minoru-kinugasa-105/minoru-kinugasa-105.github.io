import React from 'react';

import '@/css/object/component/section.scss';
import '@/css/layout/career.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

export default function Career() {
    return (
        <section className="section career" id="career">
            <h1 className="section-title">
                <span className="title-text">Career</span>
                <span className="subtitle-text">経歴</span>
            </h1>
            <div className="main career-main">
                <ul className="timeline">
                    <li className="timeline-item h-196">
                        <time dateTime="" className="timeline-period">
                            <span className="time-begin">2024/4/1</span>
                            <span className="period">-</span>
                            <span className="time-end">現在</span>
                        </time>
                        <div className="timeline-icon">
                            <FontAwesomeIcon icon={faSchool} className="i" />
                        </div>
                        <div className="timeline-contents">
                            <h2 className="contents-title">S高等学校</h2>
                            <p className="contents-desc">
                                <span className="sentence">
                                    自分のやりたいことをやる時間を作るために、通信制の高校に入りました！
                                </span>
                            </p>
                        </div>
                    </li>

                    <li className="timeline-item">
                        <time dateTime="" className="timeline-period">
                            <span className="time-begin">2024/4/1</span>
                            <span className="period">-</span>
                            <span className="time-end">現在</span>
                        </time>
                        <div className="timeline-icon">
                            <FontAwesomeIcon icon={faSchool} className="i" />
                        </div>
                        <div className="timeline-contents">
                            <h2 className="contents-title">
                                KADOKAWAドワンゴ情報工科学院
                            </h2>
                            <h3 className="contents-subtitle">高等部</h3>
                            <p className="contents-desc">
                                <span className="sentence">
                                    入学してからは、授業でPythonの基礎からWebアプリケーション構築まで学びました。
                                </span>
                                <span className="sentence">
                                    授業外でも、興味のある技術であるReactやVueなどのWebフレームワークを中心に、Goでバックエンドを構築するなど、様々なことに取り組んでいます！
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
