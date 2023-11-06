import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <section>
      <div>
        <Image
          src="/sample.jpeg"
          fill
          objectFit="cover"
          objectPosition="center"
          alt="メインビジュアル"
        />
      </div>
    </section>
  );
}
