import Image from 'next/image';
import './styles/home.scss';
import { notoserifjp } from './fonts';

export default function Home() {
  return (
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
          <span>英語を学び</span>
          <br />
          <span>グローバルに活躍</span>
          <br />
          <span>出来る人材を目指そう</span>
        </p>
      </div>
    </section>
  );
}
