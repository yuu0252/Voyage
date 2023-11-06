'use client';

import Image from 'next/image';
import './styles/home.scss';

export default function Home() {
  return (
    <section className="mainvisual">
      <Image
        src="/sample.jpeg"
        fill
        objectFit="cover"
        objectPosition="left 30%"
        alt="メインビジュアル"
      />
    </section>
  );
}
