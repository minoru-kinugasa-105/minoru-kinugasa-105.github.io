import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AboutStyle from "@/css/layout/about.module.scss";
import WorksStyle from "@/css/layout/works.module.scss";
import CareerStyle from "@/css/layout/career.module.scss";

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
        <section className="works"></section>
        <section className="career"></section>
      </main>

      <Footer />
    </>
  );
}