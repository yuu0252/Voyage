import Image from 'next/image';

export default function Home() {
  return (
    <section className="mainvisual">
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
