import Image from 'next/image';

export default function Mainvisual({ url }: { url: string }) {
  return (
    <div id="mainvisual">
      {isSp ? (
        <Image
          width={1980}
          height={1080}
          alt="サムネイル"
          src={content.imageSp.url}
        />
      ) : (
        <Image
          width={1980}
          height={1080}
          alt="サムネイル"
          src={content.image.url}
        />
      )}
    </div>
  );
}
