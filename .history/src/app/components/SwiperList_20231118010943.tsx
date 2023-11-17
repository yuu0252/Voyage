import axios from 'axios';
import SwiperItem from './Swiper';

export default async function SwiperList({ category }: { category: string }) {
  const contents = await axios
    .get(`${process.env.MICROCMS_URL}${category}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    })
    .catch(() => {});
  return (
    <div className="swiper__container">
      <SwiperItem contents={contents} />
    </div>
  );
}
