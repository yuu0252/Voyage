import axios from 'axios';
import ContentItem from './ContentItem';

export default async function ContentList({ category }: { category: string }) {
  const contents = await axios
    .get(
      `${process.env.MICROCMS_URL}contents?filters=category[equals]${category}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': process.env.MICROCMS_AUTH_KEY,
        },
      }
    )
    .then((res) => {
      return res.data.contents;
    })
    .catch(() => {});
  return (
    <ul className="content__list">
      <ContentItem contents={contents} category={category} />
    </ul>
  );
}
