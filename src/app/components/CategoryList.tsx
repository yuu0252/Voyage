import axios from 'axios';
import CategoryItem from './CategoryItem';

export default async function CategoryList() {
  const categories = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}categories`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    })
    .catch(() => {
      alert('コンテンツの取得に失敗しました。');
    });
  return (
    <ul className="content__list">
      <CategoryItem categories={categories} />
    </ul>
  );
}
