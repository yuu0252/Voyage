import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <Image src="sample.jpeg" objectFit="contain" alt="メインビジュアル" />
    </section>
  );
}
