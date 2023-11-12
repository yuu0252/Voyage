'use client';

import './styles/home.scss';
import { client } from '../../libs/client';
import { notosansjp, notoserifjp } from './fonts';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

export default function Home() {
  const [isAppear, setIsAppear] = useState(true);
  // const data = await client.get({
  //   endpoint: 'blogs',
  // });
  return (
    <>
      <section className="mainvisual">
        <video
          src="/images/メインビジュアル.mov"
          loop
          autoPlay
          muted
          playsInline
        />
        <h2 className="catch">
          英語の世界を
          <br />
          深く探検
          <br />
          しよう
        </h2>
      </section>
      <section className={`introduction ${notoserifjp.className}`}>
        <div className="container">
          <div className="section-title">
            <img
              src="./images/卒業生アイコン.png"
              alt="アイコン:ペン"
              className="section-title__icon"
            />
            <h2 className={`section-title__text ${notosansjp.className}`}>
              Deeplyって？
            </h2>
          </div>
          <p>
            英語を「<span>暗記</span>」ではなく、しっかりと「<span>理解</span>
            」出来ることを目指して制作しております。
          </p>
          <Waypoint
            onEnter={() => {
              setIsAppear(false);
            }}
          >
            <p>
              <span>Deeply</span>は「
              <span className={`text--large ${isAppear ? '' : 'faded'}`}>
                &nbsp;深く&nbsp;
              </span>
              」という意味。
            </p>
          </Waypoint>
          <p>
            当サイト「Deeply」には、深く学んでほしい、そんな思いが込められています。
          </p>
        </div>
      </section>
      {/* <section
        dangerouslySetInnerHTML={{
          __html: `${data.contents[0].content}`,
        }}
      /> */}
    </>
  );
}
