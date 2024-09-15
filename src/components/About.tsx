import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import '@/css/layout/about.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="profile">
                <div className="profile-icon">
                    <Image
                        src="/images/icon.png"
                        alt="minoru's icon"
                        width={256}
                        height={256}
                        className="profile-img"
                    />
                </div>
                <div className="profile-desc">
                    <h1 className="profile-name">
                        <span className="last-name">衣笠</span>
                        <span className="first-name">みのる</span>
                    </h1>
                    <h2 className="profile-category">
                        Frontend Engineer with Backend Experience
                    </h2>

                    <hr />

                    <div className="profile-timezone">Asia / Tokyo</div>

                    <hr />

                    <div className="profile-link">
                        <span className="twitter">
                            <a href="https://x.com/minoru_kinugasa">
                                <FontAwesomeIcon
                                    icon={faSquareXTwitter}
                                    className="i"
                                />
                            </a>
                        </span>
                        <span className="github">
                            <a href="https://github.com/minoru-kinugasa-105">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="i"
                                />
                            </a>
                        </span>
                        <span className="qiita">
                            <a href="https://qiita.com/minoru_kinugasa">
                                <FontAwesomeIcon
                                    icon={faNewspaper}
                                    className="i"
                                />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="md">
                    <h3 className="intro-title">
                        Hi! I'm Japanese Web Enngineer!
                    </h3>
                    <div className="intro-description">
                        <div className="intro-top">
                            <div className="top-text">
                                <h5>Follow me!✨</h5>
                                <dl>
                                    <dt>Qiita</dt>
                                    <dd>
                                        <Link href="https://qiita.com/minoru_kinugasa">
                                            https://qiita.com/minoru_kinugasa
                                        </Link>
                                    </dd>
                                    <dt>X (twitter)</dt>
                                    <dd>
                                        <Link href="https://x.com/minoru_kinugasa">
                                            https://x.com/minoru_kinugasa
                                        </Link>
                                    </dd>
                                    <dt>Github</dt>
                                    <dd>
                                        <Link href="https://github.com/minoru-kinugasa-105">
                                            https://github.com/minoru-kinugasa-105
                                        </Link>
                                    </dd>
                                </dl>
                            </div>
                            <div className="top-skill">
                                <h5>Skill bar</h5>
                                <div className="skill-ratiobox">
                                    <div className="skill-ratio">
                                        <div className="ratio-js"></div>
                                        <div className="ratio-ts"></div>
                                        <div className="ratio-go"></div>
                                        <div className="ratio-scss"></div>
                                        <div className="ratio-py"></div>
                                    </div>
                                </div>
                                <div className="skill-commentary">
                                    <div className="ratio-js">Javascript</div>
                                    <div className="ratio-ts">Typescript</div>
                                    <div className="ratio-go">Go</div>
                                    <div className="ratio-scss">Scss</div>
                                    <div className="ratio-py">Python</div>
                                </div>
                            </div>
                        </div>
                        <h4>Profile</h4>
                        I'm a Japanese engineering student. <br />
                        I'm 15 years old.
                        <h4>Skills</h4>
                        Full-stack Engineer: Front-end to back-end Skills
                        <h5>Expert</h5>
                        <ul>
                            <li>Next, Vue, Node, Flask, SQLite, MySQL</li>
                            <li>Figma, Firebase, Git</li>
                        </ul>
                        <h5>Familiar</h5>
                        <ul>
                            <li>React, Django, PostgreSQL</li>
                            <li>Python, Go, Ruby, Arduino, Cloudflare</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
