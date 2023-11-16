import Link from 'next/link';

type content = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

export default function CategoryItem({
  contents,
  category,
}: {
  contents: Array<content>;
  category: string;
}) {
  return (
    <>
      {contents.map((content: content) => (
        <li key={content.id}>
          <Link className="content__item" href={`/contents/${category}`}>
            <img className="content__img" src={content.image.url} />
            <div className="content__description">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
