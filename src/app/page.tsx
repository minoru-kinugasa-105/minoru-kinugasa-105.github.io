import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/css/layout/about.scss";
import "@/css/layout/works.scss";
import "@/css/layout/career.scss";
import "@/css/object/component/section.scss";
import "@/css/layout/contact.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  return (
    <>
      <Header />

      <main>
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
                <span className="last-name">
                  衣笠
                </span>
                <span className="first-name">
                  みのる
                </span>
              </h1>
              <h2 className="profile-category">
                Frontend Engineer with Backend Experience
              </h2>

              <hr />

              <div className="profile-timezone">
                Asia / Tokyo
              </div>

              <hr />

              <div className="profile-link">
                <span className="twitter">
                  <a href="https://x.com/minoru_kinugasa">
                    <FontAwesomeIcon icon={faSquareXTwitter} className="i" />
                  </a>
                </span>
                <span className="github">
                  <a href="https://github.com/minoru-kinugasa-105">
                    <FontAwesomeIcon icon={faGithub} className="i" />
                  </a>
                </span>
                <span className="qiita">
                  <a href="https://qiita.com/minoru_kinugasa">
                    <FontAwesomeIcon icon={faNewspaper} className="i" />
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
                    <h5>
                      Follow me!✨
                    </h5>
                    <dl>
                      <dt>
                        Qiita
                      </dt>
                      <dd>
                        <Link href="https://qiita.com/minoru_kinugasa">
                          https://qiita.com/minoru_kinugasa
                        </Link>
                      </dd>
                      <dt>
                        X (twitter)
                      </dt>
                      <dd>
                        <Link href="https://x.com/minoru_kinugasa">
                          https://x.com/minoru_kinugasa
                        </Link>
                      </dd>
                      <dt>
                        Github
                      </dt>
                      <dd>
                        <Link href="https://github.com/minoru-kinugasa-105">
                          https://github.com/minoru-kinugasa-105
                        </Link>
                      </dd>
                    </dl>
                  </div>
                  <div className="top-skill">
                    <h5>
                      Skill bar
                    </h5>
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
                <h4>
                  Profile
                </h4>
                I'm a Japanese engineering student. <br />
                I'm 15 years old.

                <h4>
                  Skills
                </h4>
                Full-stack Engineer: Front-end to back-end Skills

                <h5>
                  Expert
                </h5>
                <ul>
                  <li>
                    Next, Vue, Node, Flask, SQLite, MySQL
                  </li>
                  <li>
                    Figma, Firebase, Git
                  </li>
                </ul>

                <h5>
                  Familiar
                </h5>
                <ul>
                  <li>
                    React, Django, PostgreSQL
                  </li>
                  <li>
                    Python, Go, Ruby, Arduino, Cloudflare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section works" id="works">
          <h1 className="section-title">
            <span className="title-text">
              Works
            </span>
            <span className="subtitle-text">
              成果物・開発中
            </span>
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
                <span className="headline-title">
                  Portfolio
                </span>
              </div>
              <div className="works-desc">
                <h2 className="desc-title">
                  Portfolio
                </h2>
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
                <span className="headline-title">
                  QuickScript
                </span>
              </div>
              <div className="works-desc">
                <h2 className="desc-title">
                  QuickScript
                </h2>
                <p className="desc-explanation">
                  開発中ですが、DiscordのBotをローコードで作成でき、ホスティングができるサービスです。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section career" id="career">
          <h1 className="section-title">
            <span className="title-text">
              Career
            </span>
            <span className="subtitle-text">
              経歴
            </span>
          </h1>
          <div className="main career-main">
            <ul className="timeline">

              <li className="timeline-item h-196">
                <time dateTime="" className="timeline-period">
                  <span className="time-begin">
                    2024/4/1
                  </span>
                  <span className="period">
                    -
                  </span>
                  <span className="time-end">
                    現在
                  </span>
                </time>
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={faCode} className="i" />
                </div>
                <div className="timeline-contents">
                  <h2 className="contents-title">
                    S高等学校
                  </h2>
                  <p className="contents-desc">
                    <span className="sentence">
                      自分のやりたいことをやる時間を作るために、通信制の高校に入りました！
                    </span>
                  </p>
                </div>
              </li>

              <li className="timeline-item">
                <time dateTime="" className="timeline-period">
                  <span className="time-begin">
                    2024/4/1
                  </span>
                  <span className="period">
                    -
                  </span>
                  <span className="time-end">
                    現在
                  </span>
                </time>
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={faCode} className="i" />
                </div>
                <div className="timeline-contents">
                  <h2 className="contents-title">
                    KADOKAWAドワンゴ情報工科学院
                  </h2>
                  <h3 className="contents-subtitle">
                    高等部
                  </h3>
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

        <section className="section contact" id="contact">
          <h1 className="section-title">
            <span className="title-text">
              Contact
            </span>
            <span className="subtitle-text">
              連絡先
            </span>
          </h1>
          <div className="main contact-main">
            <span className="contact-text">
              連絡はTwitter(
              <Link href="https://x.com/minoru_kinugasa">
                @minoru_kinugasa
              </Link>
              )かGmail(
              <Link href="mailto:minoru105ts@gmail.com">
                minoru105ts@gmail.com
              </Link>
              )まで！
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}