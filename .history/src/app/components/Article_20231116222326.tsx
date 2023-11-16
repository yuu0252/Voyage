import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Article({
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
    <main>
      <div id="mainvisual">
        {isSp ? (
          <Image
            width={1980}
            height={1080}
            alt="サムネイル"
            className="content__img"
            src={content.image.url}
          />
        ) : (
          <Image
            width={1980}
            height={1080}
            alt="サムネイル"
            className="content__img"
            src={content.image.url}
          />
        )}
      </div>
      <section id="article">
        <div className="container">
          <h2 className="title">{content.title}</h2>
          <p className="description">{content.description}</p>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
      </section>
    </main>
  );
}
