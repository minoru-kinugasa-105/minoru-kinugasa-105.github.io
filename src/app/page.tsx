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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className={AboutStyle["about"]}>
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
              <p className={AboutStyle["intro-description"]}>
                <span className={`${AboutStyle["strong"]} ${AboutStyle["d-block"]}`}>
                  This is strong text
                </span>
                <a href="" className={`${AboutStyle["link"]} ${AboutStyle["d-block"]}`}>
                  This is link text
                </a>
                This is normal text<br />
              </p>
            </div>
          </div>
        </section>

        <section className={`${SectionStyle["section"]} ${WorksStyle["works"]}`}>
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

        <section className="career"></section>
      </main >

      <Footer />
    </>
  );
}