import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <a href="#" className="footer__logo">
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
          </a>
        </div>
        <div className="footer__main">
          <nav>
            <ul className="footer__g-nav">
              <li>
                <a href="#">ホーム</a>
              </li>
              <li>
                <a href="#">コンテンツ一覧</a>
              </li>
              <li>
                <ul className="footer__sns-list">
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="search__box footer__search__box">
                <form role="search" method="get" className="search__container">
                  <input
                    type="text"
                    className="search__text"
                    placeholder="検索"
                  />
                </form>
              </li>
            </ul>
          </nav>
        </div>
        <small className="copyright">&copy; 2023 Deeply</small>
      </div>
    </footer>
  );
}
