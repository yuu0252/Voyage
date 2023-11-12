import Link from 'next/link';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <Link href="/" className="footer__logo">
            <img
              src="./images/本棚の無料アイコン 1 (黒).png"
              alt="Deeply"
              className="footer__icon"
            />
            <h1 className="footer__title">
              <span className="sub-title">英語を深く学ぼう</span>
              <br />
              Deeply
            </h1>
          </Link>
        </div>
        <div className="footer__main">
          <nav>
            <ul className="footer__g-nav">
              <li>
                <Link href="/">ホーム</Link>
              </li>
              <li>
                <Link href="/contents">コンテンツ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <small className="copyright">&copy; 2023 Deeply</small>
      </div>
    </footer>
  );
}
