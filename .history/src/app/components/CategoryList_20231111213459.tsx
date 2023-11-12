import axios from 'axios';
import Link from 'next/link';

type category = {
  id: string;
  name: string;
};

export default function CategoryList() {
  const categories = axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}/categories`, {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      console.log(res);
    });

  return (
    <ul className="card__list">
      {/* {categories.map((category: category) => (
        <li key={category.id}>
          <Link className="card__item" href={`/categories/${category.id}`}>
            <h3 className="card__title">{category.name}</h3>
          </Link>
        </li>
      ))} */}
    </ul>
  );
}