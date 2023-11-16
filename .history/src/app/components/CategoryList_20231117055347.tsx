import axios from 'axios';
import CategoryItem from './CategoryItem';

export default async function CategoryList() {
  const categories = await axios
    .get(`${process.env.MICROCMS_URL}categories`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    })
    .catch(() => {});
  return (
    <ul className="content__list">
      <CategoryItem categories={categories} />
    </ul>
  );
}
