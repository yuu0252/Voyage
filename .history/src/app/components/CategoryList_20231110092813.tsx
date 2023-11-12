import { client } from 'libs/client';

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
      {categories.map((category) => {
        console.log(category.id);
        <li key={category.id}>{category.name}</li>;
      })}
    </ul>
  );
}
