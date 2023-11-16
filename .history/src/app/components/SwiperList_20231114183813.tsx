import axios from 'axios';
import SwiperItem from './Swiper';

export default async function SwiperList({ category }: { category: string }) {
  const contents = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}${category}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    });
  return (
    <ul className="swiper__container">
      <SwiperItem contents={contents} />
    </ul>
  );
}
