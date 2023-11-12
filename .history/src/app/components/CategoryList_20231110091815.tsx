import { client } from 'libs/client';

export default async function CategoryList() {
  const categories = await client
    .get({
      endpoint: 'categories',
    })
    .then((res) => {
      console.log(res.data);
    });

  return (
    <ul>
      {/* {categories.map((category) => {
        <li>{category.title}</li>;
      })} */}
    </ul>
  );
}
