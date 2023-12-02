'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Mainvisual({
  content,
}: {
  content: {
    title: string;
    description: string;
    content: string;
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
        <Image alt="サムネイル" src={content.imageSp.url} />
      ) : (
        <Image alt="サムネイル" src={content.image.url} />
      )}
    </div>
  );
}
