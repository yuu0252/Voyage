import Link from 'next/link';
import Mainvisual from './Mainvisual';

export default function Article({
  content,
}: {
  content: {
    title: string;
    description: string;
    content: [{ content: string }];
    image: {
      url: string;
    };
    imageSp: {
      url: string;
    };
    category: {
      id: string;
      title: string;
      image: {
        url: string;
      };
    };
  };
}) {
  return (
    <>
      <main>
        <Mainvisual content={content} />
        <section id="article">
          <div className="container">
            <h2 className="title">{content.title}</h2>
            <p className="description">{content.description}</p>
            {content.content.map((content) => (
              <div
                key={content.content}
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            ))}
            <Link
              href={`/contents/${content.category.id}`}
              className="category-link"
            >
              <img
                src={content.category.image.url}
                alt={content.category.title}
              />
              <p>{content.category.title}一覧へ</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
