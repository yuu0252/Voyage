import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <Image src="/sample.jpeg" fill cover alt="メインビジュアル" />
    </section>
  );
}
