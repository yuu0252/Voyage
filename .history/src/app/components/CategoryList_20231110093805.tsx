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
      return res.contents;
    });

  return (
    <ul>
      {categories.map((category: category) => (
        <li key={category.id}>
          <Link href={`/categories/${category.id}`}></Link>
          {category.name}
        </li>
      ))}
    </ul>
  );
}
