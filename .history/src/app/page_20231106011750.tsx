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
        <p>
          英語を学んで
          <br />
          グローバルに
        </p>
      </div>
    </section>
  );
}
