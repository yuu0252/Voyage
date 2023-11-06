import Image from 'next/image';
import './styles/home.scss';

export default function Home() {
  return (
    <section className="mainvisual">
      <div>
        <Image
          className="mainvisual__img"
          src="/sample.jpeg"
          fill
          objectFit="scale-down"
          objectPosition="left 30%"
          alt="メインビジュアル"
        />
      </div>
      <div>
        <p>
          英語を学んで
          <br />
          グローバルに
        </p>
      </div>
    </section>
  );
}
