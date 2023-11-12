import { client } from 'libs/client';

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
      {categories.map((category: category) => {
        <li key={category.id}>{category.name}</li>;
      })}
    </ul>
  );
}
