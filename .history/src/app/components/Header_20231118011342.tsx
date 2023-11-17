'use client';

import { useEffect, useState } from 'react';
import '../styles/header.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Header({
  isThum = false,
  spWaypoint = 500,
  pcWaypoint = 700,
}: {
  isThum?: boolean;
  spWaypoint?: number;
  pcWaypoint?: number;
}) {
  const isSp = useMediaQuery({ query: '(max-width: 767px)' });
  const waypoint = isSp ? spWaypoint - 60 : pcWaypoint - 60;
  const [isTransparent, setIsTransparent] = useState(true);
  const [activeOpenbtn, setActiveOpenbtn] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setActiveOpenbtn(false);
  }, [pathname, searchParams]);

  const onClickOpenbtn = (): void => {
    setActiveOpenbtn(!activeOpenbtn);
  };

  const toggleVisibility = () => {
    window.scrollY > waypoint
      ? setIsTransparent(false)
      : setIsTransparent(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <header
      className={`header ${isTransparent && isThum ? 'transparent' : ''}`}
    >
      <div className="header-container">
        <div>
          <Link href="/" className="header__logo">
            <Image src="/images/本.png" alt="Voyage" className="header__icon" />
            <h1 className="header__title">
              <span className="sub-title">英語の世界を旅しよう</span>
              <br />
              Voyage
            </h1>
          </Link>
        </div>
        <nav>
          <ul className={`g-nav ${activeOpenbtn ? 'active' : ''}`}>
            <li>
              <Link className="g-nav__title" href="/">
                ホーム
              </Link>
            </li>
            <li>
              <Link className="g-nav__title" href="/contents">
                コンテンツ
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={`openbtn ${activeOpenbtn ? 'active' : ''}`}
          onClick={onClickOpenbtn}
          name="openBtn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
