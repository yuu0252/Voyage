import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <Image
        src="sample.jpeg"
        layout="fill"
        objectFit="contain"
        alt="メインビジュアル"
      />
    </section>
  );
}
