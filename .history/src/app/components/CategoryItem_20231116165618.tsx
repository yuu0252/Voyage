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
          <Link className="content__item" href={`/contents/${category.id}`}>
            <img
              className="content__img content__img--center"
              src={category.image.url}
            />
            <div className="content__description">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
