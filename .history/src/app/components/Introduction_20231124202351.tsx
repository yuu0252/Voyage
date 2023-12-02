'use client';
import Image from 'next/image';
import { notosansjp, notoserifjp } from '../constants';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

export default function Introduction() {
  const [isAppear, setIsAppear] = useState(false);
  return (
    <section id="introduction" className={`${notoserifjp.className}`}>
      <div className="container">
        <div className="section-title introduction__title">
          <Image
            width={30}
            height={30}
            src="/images/卒業生アイコン.png"
            alt="アイコン:人"
            className="section-title__icon"
          />
          <h2 className={`section-title__text ${notosansjp.className}`}>
            Voyageって？
          </h2>
        </div>
        <p>
          「Voyage」は<span>幅広い世代</span>
          に向けた総合英語学習Webサイトです。
        </p>
        <p>
          英語を「<span>暗記</span>」ではなく、しっかりと「<span>理解</span>
          」出来ることを目指して制作しております。
        </p>
        <Waypoint
          onEnter={() => {
            setIsAppear(true);
          }}
          bottomOffset="400px"
        >
          <p>
            <span>Voyage</span>は「
            <span className={`text--large faded ${isAppear ? 'active' : ''}`}>
              &nbsp;旅&nbsp;
            </span>
            」という意味。
          </p>
        </Waypoint>
        <p>
          当サイト「Voyage」には、英語の世界を深く楽しく学んでほしい、そんな思いが込められています。
        </p>
      </div>
    </section>
  );
}
