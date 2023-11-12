'use client';

import { useState } from 'react';
import '../styles/header.scss';

export default function Header() {
  const [activeOpenbtn, setActiveOpenbtn] = useState(false);
  const onClickOpenbtn = (): void => {
    setActiveOpenbtn(!activeOpenbtn);
  };
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
          <ul className={`g-nav ${activeOpenbtn ? 'active' : ''}`}>
            <li>
              <a href="#" className="g-nav__title">
                ホーム
              </a>
            </li>
            <li>
              <h3 className="g-nav__title">コンテンツ&nbsp;</h3>
            </li>
            <li>
              <h3 className="g-nav__title">SNSシェア&nbsp;</h3>
            </li>
          </ul>
        </nav>
        <button
          className={`openbtn ${activeOpenbtn ? 'active' : ''}`}
          onClick={onClickOpenbtn}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
