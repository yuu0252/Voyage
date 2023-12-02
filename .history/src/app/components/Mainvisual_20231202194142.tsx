'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Mainvisual({
  content,
}: {
  content: {
    image: {
      url: string;
    };
    imageSp: {
      url: string;
    };
  };
}) {
  const isSp = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div id="mainvisual">
      {isSp ? (
        <Image
          width={1980}
          height={500}
          alt="サムネイル"
          src={content.imageSp.url}
        />
      ) : (
        <Image
          width={1980}
          height={700}
          alt="サムネイル"
          src={content.image.url}
        />
      )}
    </div>
  );
}
