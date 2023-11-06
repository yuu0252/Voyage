import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <Image
        src="/sample.jpeg"
        fill
        objectFit="cover"
        objectPosition="center"
        alt="メインビジュアル"
      />
    </section>
  );
}
