import Link from 'next/link';
import '../styles/footer.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <Link href="/" className="footer__logo">
            <Image
              src="/images/本棚の無料アイコン 1 (黒).png"
              alt="Voyage"
              className="footer__icon"
              fill
            />
            <h1 className="footer__title">
              <span className="sub-title">英語の世界を旅しよう</span>
              <br />
              Voyage
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
        <small className="copyright">&copy; 2023 Voyage</small>
      </div>
    </footer>
  );
}
