import Image from 'next/image';
import './styles/home.scss';

export default function Home() {
  return (
    <section className="mainvisual">
      <div className="mainvisual__left">
        <Image
          className="mainvisual__img"
          src="/sample.jpeg"
          fill
          objectFit="scale-down"
          objectPosition="left 30%"
          alt="メインビジュアル"
        />
      </div>
      <div className="mainvisual__right">
        <p>
          英語を学んで
          <br />
          グローバルに活躍しよう
        </p>
      </div>
    </section>
  );
}
