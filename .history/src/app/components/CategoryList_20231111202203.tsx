import { client } from 'libs/client';
import Link from 'next/link';

type category = {
  id: string;
  name: string;
};

export default async function CategoryList() {
  const categories = await client
    .get({
      endpoint: 'categories',
    })
    .then((res) => {
      console.log(res.contents);
      return res.contents;
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
