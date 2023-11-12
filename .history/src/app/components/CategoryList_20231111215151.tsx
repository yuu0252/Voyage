import axios from 'axios';
import Image from 'next/image';
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
    <ul className="card__list">
      {categories.map((category: category) => (
        <li key={category.id}>
          <Link className="card__item" href={`/categories/${category.id}`}>
            <Image
              src={category.image.url}
              alt={category.name}
              fill
              className="card__img"
            />
            <h3 className="card__title">{category.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
