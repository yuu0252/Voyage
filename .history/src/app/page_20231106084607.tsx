import Image from 'next/image';
import './styles/home.scss';
import { notoserifjp } from './fonts';

export default function Home() {
  return (
    <>
      <section className="mainvisual">
        <div className="mainvisual__left">
          <Image
            className="mainvisual__img"
            src="/sample.jpeg"
            fill
            objectFit="cover"
            objectPosition="left 30%"
            alt="メインビジュアル"
          />
        </div>
        <div className={`mainvisual__right ${notoserifjp.className}`}>
          <h3>For Business</h3>
          <p>
            英語を学び
            <br />
            グローバルに活躍
            <br />
            出来る人材を目指そう
          </p>
        </div>
      </section>
      <section>
        <h2 className={`${notoserifjp.className}`}>- コンテンツ -</h2>
      </section>
    </>
  );
}
