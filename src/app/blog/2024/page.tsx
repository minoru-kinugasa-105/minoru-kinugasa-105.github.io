<article className={CardStyle["card"]}>
<div className={CardStyle["card-imgbox"]}>
  <Image
    src="/images/icon.png"
    width={100}
    height={80}
    alt="article image"
    className={CardStyle["card-img"]}
  />
</div>
<Link href="/" className={CardStyle["card-explanation"]}>
  <h2 className={CardStyle["card-title"]}>
    QuickScript
  </h2>
  <h3 className={CardStyle["card-desc"]}>
    Discord Botをローコードスクリプトで記述し、ホスティングできるサービスです。
  </h3>
</Link>
<div className={CardStyle["card-footer"]}>
  <ul className={CardStyle["card-taglist"]}>
    <li className={`${CardStyle["card-tag"]} ${TagStyle["tag-limegreen"]}`}>
      <Link href="#tag">
        React
      </Link>
    </li>
    <li className={`${CardStyle["card-tag"]} ${TagStyle["tag-green"]}`}>
      <Link href="#tag">
        Vue
      </Link>
    </li>
  </ul>
  <span className={CardStyle["card-date"]}>
    26 Feb 2024
  </span>
</div>
</article>