import { client } from 'libs/client';

export default async function CategoryList() {
  const data = await client
    .get({
      endpoint: 'categories',
    })
    .then((res) => {
      return res.data;
    });
  return <ul>{categories.map((category) => {})}</ul>;
}
