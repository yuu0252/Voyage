import Link from 'next/link';

type category = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

export default function CategoryItem({
  categories,
}: {
  categories: Array<category>;
}) {
  return (
    <>
      {categories.map((category: category) => (
        <li key={category.id}>
          <Link className="content__item" href={`/contents/${content.id}`}>
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
