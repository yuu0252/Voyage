'use client';

import './styles/home.scss';
import { client } from '../../libs/client';
import { notosansjp, notoserifjp } from './fonts';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import CategoryList from './components/CategoryList';

export default function Home() {
  const [isAppear, setIsAppear] = useState(false);
  return (
    <>
      <Waypoint
        onLeave={() => {
          alert('aaa');
          setIsAppear(true);
        }}
      >
        <section className="mainvisual">
          <video src="/images/mainvisual.mov" loop autoPlay muted playsInline />
          <h2 className="catch">
            英語の世界を
            <br />
            深く探検
            <br />
            しよう
          </h2>
        </section>
      </Waypoint>
      <section className={`introduction ${notoserifjp.className}`}>
        <div className="container">
          <div className="section-title introduction__title">
            <img
              src="/images/卒業生アイコン.png"
              alt="アイコン:人"
              className="section-title__icon"
            />
            <h2 className={`section-title__text ${notosansjp.className}`}>
              Deeplyって？
            </h2>
          </div>
          <p>
            「Deeply」は<span>幅広い世代</span>
            に向けた総合英語学習Webサイトです。
          </p>
          <p>
            英語を「<span>暗記</span>」ではなく、しっかりと「<span>理解</span>
            」出来ることを目指して制作しております。
          </p>

          <p>
            <span>Deeply</span>は「
            <span className={`text--large faded ${isAppear ? 'active' : ''}`}>
              &nbsp;深く&nbsp;
            </span>
            」という意味。
          </p>

          <p>
            当サイト「Deeply」には、深く学んでほしい、そんな思いが込められています。
          </p>
        </div>
        <div className="height"></div>
      </section>
      <section>
        <CategoryList />
      </section>
    </>
  );
}
