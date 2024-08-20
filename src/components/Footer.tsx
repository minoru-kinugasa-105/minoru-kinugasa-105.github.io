import FooterStyle from "@/css/layout/footer.module.scss";

export default function Footer() {
    return (
        <footer className={FooterStyle["footer"]}>
            <span className={FooterStyle["footer-powered"]}>
                Powered by GitHub Pages.
            </span>
        </footer>
    )
}