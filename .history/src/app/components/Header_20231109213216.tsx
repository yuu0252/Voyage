'use client';

import { useState } from 'react';
import '../styles/header.scss';
import Link from 'next/link';

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
              <Link className="g-nav__title" href="/">
                ホーム
              </Link>
            </li>
            <li>
              <Link className="g-nav__title" href="/content">
                コンテンツ
              </Link>
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
