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
  const isSp = useMediaQuery({ maxWidth: 767 });
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
