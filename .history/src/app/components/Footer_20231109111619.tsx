import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div>
          <a href="#" class="footer__logo">
            <img
              src="./images/本棚の無料アイコン 1 (黒).png"
              alt="Deeply"
              class="footer__icon"
            />
            <h1 class="footer__title">
              <span class="sub-title">英語を深く学ぼう</span>
              <br />
              Deeply
            </h1>
          </a>
        </div>
        <div class="footer__main">
          <nav>
            <ul class="footer__g-nav">
              <li>
                <a href="#">ホーム</a>
              </li>
              <li>
                <a href="#">コンテンツ一覧</a>
              </li>
              <li>
                <ul class="footer__sns-list">
                  <li>
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="search__box footer__search__box">
                <form role="search" method="get" class="search__container">
                  <input type="text" class="search__text" placeholder="検索" />
                </form>
              </li>
            </ul>
          </nav>
        </div>
        <small class="copyright">&copy; 2023 Deeply</small>
      </div>
    </footer>
  );
}
