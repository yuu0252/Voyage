import axios from 'axios';
import Link from 'next/link';

type category = {
  id: string;
  name: string;
};

export default async function CategoryList() {
  const categories = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}categories`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    });
  return (
    <ul className="slider card__list">
      {categories.map((category: category) => (
        <li key={category.id}>
          <Link className="card__item" href={`/categories/${category.id}`}>
            <img
              src={category.image.url}
              alt={category.name}
              className="card__img"
            />
            <h3 className="card__title">{category.name}</h3>
            <div
              dangerouslySetInnerHTML={
                <p>aaa</p>,
              }
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
