import Image from 'next/image';
import './styles/home.scss';

export default function Home() {
  return (
    <section className="mainvisual">
      <Image
        src="/sample.jpeg"
        fill
        objectFit="scale-down"
        objectPosition="left 30%"
        alt="メインビジュアル"
      />
    </section>
  );
}
