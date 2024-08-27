import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AboutStyle from "@/css/layout/about.module.scss";
import WorksStyle from "@/css/layout/works.module.scss";
import CareerStyle from "@/css/layout/career.module.scss";
import TagStyle from "@/css/object/component/tag.module.scss";
import CardStyle from "@/css/object/component/card.module.scss";
import SectionStyle from "@/css/object/component/section.module.scss";
import ContactStyle from "@/css/layout/contact.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faSchool, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className={AboutStyle["about"]} id="about">
          <div className={AboutStyle["profile"]}>
            <div className={AboutStyle["profile-icon"]}>
              <Image
                src="/images/icon.png"
                alt="minoru's icon"
                width={256}
                height={256}
                className={AboutStyle["profile-img"]}
              />
            </div>
            <div className={AboutStyle["profile-desc"]}>
              <h1 className={AboutStyle["profile-name"]}>
                <span className={AboutStyle["last-name"]}>
                  衣笠
                </span>
                <span className={AboutStyle["first-name"]}>
                  みのる
                </span>
              </h1>
              <h2 className={AboutStyle["profile-category"]}>
                Frontend Engineer with Backend Experience
              </h2>

              <hr />

              <div className={AboutStyle["profile-timezone"]}>
                Asia / Tokyo
              </div>

              <hr />

              <div className={AboutStyle["profile-link"]}>
                <span className={AboutStyle["twitter"]}>
                  <a href="https://x.com/minoru_kinugasa">
                    <FontAwesomeIcon icon={faSquareXTwitter} className={AboutStyle["i"]} />
                  </a>
                </span>
                <span className={AboutStyle["github"]}>
                  <a href="https://github.com/minoru-kinugasa-105">
                    <FontAwesomeIcon icon={faGithub} className={AboutStyle["i"]} />
                  </a>
                </span>
                <span className={AboutStyle["qiita"]}>
                  <a href="https://qiita.com/minoru_kinugasa">
                    <FontAwesomeIcon icon={faNewspaper} className={AboutStyle["i"]} />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={AboutStyle["intro"]}>
            <div className={AboutStyle["md"]}>
              <h3 className={AboutStyle["intro-title"]}>
                Hi! I'm Japanese Web Enngineer!
              </h3>
              <div className={AboutStyle["intro-description"]}>
                <div className={AboutStyle["intro-top"]}>
                  <div className={AboutStyle["top-text"]}>
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
                  <div className={AboutStyle["top-skill"]}>
                    <h5>
                      Skill bar
                    </h5>
                    <div className={AboutStyle["skill-ratiobox"]}>
                      <div className={AboutStyle["skill-ratio"]}>
                        <div className={AboutStyle["ratio-js"]}></div>
                        <div className={AboutStyle["ratio-ts"]}></div>
                        <div className={AboutStyle["ratio-go"]}></div>
                        <div className={AboutStyle["ratio-scss"]}></div>
                        <div className={AboutStyle["ratio-py"]}></div>
                      </div>
                    </div>
                    <div className={AboutStyle["skill-commentary"]}>
                      <div className={AboutStyle["ratio-js"]}>Javascript</div>
                      <div className={AboutStyle["ratio-ts"]}>Typescript</div>
                      <div className={AboutStyle["ratio-go"]}>Go</div>
                      <div className={AboutStyle["ratio-scss"]}>Scss</div>
                      <div className={AboutStyle["ratio-py"]}>Python</div>
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

        <section className={`${SectionStyle["section"]} ${WorksStyle["works"]}`} id="works">
          <h1 className={SectionStyle["section-title"]}>
            <span className={SectionStyle["title-text"]}>
              Works
            </span>
            <span className={SectionStyle["subtitle-text"]}>
              成果物・開発中
            </span>
          </h1>
          <div className={`${SectionStyle["main"]} ${WorksStyle["works-main"]}`}>
            <Link className={WorksStyle["works-card"]} href="/">
              <div className={WorksStyle["works-headline"]}>
                <div className={WorksStyle["headline-imgbox"]}>
                  <Image
                    className={WorksStyle["headline-img"]}
                    src="/images/transparent-icon.png"
                    width={100}
                    height={100}
                    alt="works-img"
                  />
                </div>
              </div>
              <div className={WorksStyle["works-desc"]}>
                <h2 className={WorksStyle["desc-title"]}>
                  Portfolio
                </h2>
                <p className={WorksStyle["desc-explanation"]}>
                  PortfolioにBlogをつけたサイトです！
                </p>
              </div>
            </Link>
            <Link className={WorksStyle["works-card"]} href="/">
              <div className={WorksStyle["works-headline"]}>
                <div className={WorksStyle["headline-imgbox"]}>
                  <Image
                    className={WorksStyle["headline-img"]}
                    src="/images/QuickScript.png"
                    width={80}
                    height={80}
                    alt="works-img"
                  />
                </div>
              </div>
              <div className={WorksStyle["works-desc"]}>
                <h2 className={WorksStyle["desc-title"]}>
                  QuickScript
                </h2>
                <p className={WorksStyle["desc-explanation"]}>
                  開発中ですが、DiscordのBotをローコードで作成でき、ホスティングができるサービスです。
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className={`${SectionStyle["section"]} ${CareerStyle["career"]}`} id="career">
          <h1 className={SectionStyle["section-title"]}>
            <span className={SectionStyle["title-text"]}>
              Career
            </span>
            <span className={SectionStyle["subtitle-text"]}>
              経歴
            </span>
          </h1>
          <div className={`${SectionStyle["main"]} ${CareerStyle["career-main"]}`}>
            <ul className={CareerStyle["timeline"]}>
              <li className={`${CareerStyle["timeline-item"]} ${CareerStyle["h-196"]}`}>
                <time dateTime="" className={CareerStyle["timeline-period"]}>
                  <span className={CareerStyle["time-begin"]}>
                    2022/6/13
                  </span>
                </time>
                <div className={CareerStyle["timeline-icon"]}>
                  <FontAwesomeIcon icon={faCode} className={CareerStyle["i"]} />
                </div>
                <div className={CareerStyle["timeline-contents"]}>
                  <h2 className={CareerStyle["contents-title"]}>
                    はじめのいっぽ
                  </h2>
                  <h3 className={CareerStyle["contents-subtitle"]}>
                    全てはここから始まった
                  </h3>
                  <p className={CareerStyle["contents-desc"]}>
                    <span className={CareerStyle["sentence"]}>
                      中学2年生にしてプログラミングに憧れ、htmlだけいじって楽しんでた。
                    </span>
                    <span className={CareerStyle["sentence"]}>
                      詐欺サイトなんかを作って遊んだりしてた。
                    </span>
                  </p>
                </div>
              </li>

              <li className={`${CareerStyle["timeline-item"]} ${CareerStyle["h-220"]}`}>
                <time dateTime="" className={CareerStyle["timeline-period"]}>
                  <span className={CareerStyle["time-begin"]}>
                    2022/11/20
                  </span>
                  <span className={CareerStyle["period"]}>
                    -
                  </span>
                  <span className={CareerStyle["time-end"]}>
                    2022/11/22
                  </span>
                </time>
                <div className={CareerStyle["timeline-icon"]}>
                  <FontAwesomeIcon icon={faCode} className={CareerStyle["i"]} />
                </div>
                <div className={CareerStyle["timeline-contents"]}>
                  <h2 className={CareerStyle["contents-title"]}>
                    いきなりの実践
                  </h2>
                  <h3 className={CareerStyle["contents-subtitle"]}>
                    友達にサイト作成を頼まれる
                  </h3>
                  <p className={CareerStyle["contents-desc"]}>
                    <span className={CareerStyle["sentence"]}>
                      htmlさわれるというだけだったのに、見栄をはって「サイト作成できる」と言ってしまったばっかりにサイト作成を依頼されてしまった。
                    </span>
                    <span className={CareerStyle["sentence"]}>
                      もちろんまだcssの知識もなかったわけで、死ぬ気でやって悟られないように頑張ってました。(-_-;)
                    </span>
                  </p>
                </div>
              </li>

              <li className={`${CareerStyle["timeline-item"]} ${CareerStyle["h-268"]}`}>
                <time dateTime="" className={CareerStyle["timeline-period"]}>
                  <span className={CareerStyle["time-begin"]}>
                    2023/04/03
                  </span>
                </time>
                <div className={CareerStyle["timeline-icon"]}>
                  <FontAwesomeIcon icon={faNodeJs} className={CareerStyle["i"]} />
                </div>
                <div className={CareerStyle["timeline-contents"]}>
                  <h2 className={CareerStyle["contents-title"]}>
                    プログラミングの楽しさを知る
                  </h2>
                  <h3 className={CareerStyle["contents-subtitle"]}>
                    バックエンドを触り始める
                  </h3>
                  <p className={CareerStyle["contents-desc"]}>
                    <span className={`${CareerStyle["sentence"]} ${CareerStyle["break"]}`}>
                      Discordというチャットアプリの、Bot開発をJavascriptでやり始めた。
                    </span>
                    <span className={CareerStyle["sentence"]}>
                      バックエンドが初めてだったので、概念の理解が難しかったけど、教えてくれる先輩がいたので挫折せずにすんだ。
                    </span>
                    <span className={CareerStyle["sentence"]}>
                      Botがただ返信をしてくれただけで飛び跳ねるほど嬉しかったし、楽しかった。
                    </span>
                  </p>
                </div>
              </li>

              <li className={`${CareerStyle["timeline-item"]} ${CareerStyle["h-end"]}`}>
                <time dateTime="" className={CareerStyle["timeline-period"]}>
                  <span className={CareerStyle["time-begin"]}>
                    2024/05/30
                  </span>
                  <span className={CareerStyle["period"]}>
                    -
                  </span>
                  <span className={CareerStyle["time-end"]}>
                    現在
                  </span>
                </time>
                <div className={CareerStyle["timeline-icon"]}>
                  <FontAwesomeIcon icon={faCodeBranch} className={CareerStyle["i"]} />
                </div>
                <div className={CareerStyle["timeline-contents"]}>
                  <h2 className={CareerStyle["contents-title"]}>
                    サービス開発開始！
                  </h2>
                  <h3 className={CareerStyle["contents-subtitle"]}>
                    Discord Bot ローコードサービスを開発し始める
                  </h3>
                  <p className={CareerStyle["contents-desc"]}>
                    <span className={CareerStyle["sentence"]}>
                      公開しているサービスや成果物を作ったことがなかったので、サービスを作る気になりました。
                    </span>
                    <span className={CareerStyle["sentence"]}>
                      DisocrdのBotをサービスを使わずに作ろうとすると、とんでもない知識と時間を必要とするので、全ての手順をより簡単にできるようにと作り始めました！
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className={`${SectionStyle["section"]} ${ContactStyle["contact"]}`} id="contact">
          <h1 className={SectionStyle["section-title"]}>
            <span className={SectionStyle["title-text"]}>
              Contact
            </span>
            <span className={SectionStyle["subtitle-text"]}>
              連絡先
            </span>
          </h1>
          <div className={`${SectionStyle["main"]} ${ContactStyle["contact-main"]}`}>
            <span className={ContactStyle["contact-text"]}>
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
      </main >

      <Footer />
    </>
  );
}