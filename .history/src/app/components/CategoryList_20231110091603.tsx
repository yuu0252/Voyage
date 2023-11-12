import { client } from 'libs/client';

export default async function CategoryList() {
  const categories = await client
    .get({
      endpoint: 'categories',
    })
    .then((res) => {
      return res.data;
    });
  console.log(categories);
  return (
    <ul>
      {/* {categories.map((category) => {
        <li>{category.title}</li>;
      })} */}
    </ul>
  );
}
