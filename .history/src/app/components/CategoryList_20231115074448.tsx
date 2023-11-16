import axios from 'axios';
import CategoryItem from './CategoryItem';

export default async function ContentList() {
  const contents = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}contents`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    });
  return (
    <ul className="content__list">
      <CategoryItem contents={contents} />
    </ul>
  );
}