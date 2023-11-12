import '../styles/header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <a href="#" className="header__logo">
            <img src="/images/本.png" alt="Deeply" className="header__icon" />
            <h1 className="header__title">
              <span className="sub-title">英語を深く学ぼう</span>
              <br />
              Deeply
            </h1>
          </a>
        </div>
        <nav>
          <ul className="g-nav">
            <li>
              <a href="#" className="g-nav__title">
                ホーム
              </a>
            </li>
            <li className="has-child">
              <h3 className="g-nav__title accordion__title">
                コンテンツ&nbsp;
                <img
                  src="/images/矢印ボタン　下3.png"
                  alt="アイコン:矢印 下"
                  className="accordion__icon"
                />
              </h3>
            </li>
            <li className="has-child">
              <h3 className="g-nav__title accordion__title">
                SNSシェア&nbsp;
                <img
                  src="/images/矢印ボタン　下3.png"
                  alt="アイコン:矢印 下"
                  className="accordion__icon"
                />
              </h3>
            </li>
          </ul>
        </nav>
        <div className="openbtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
