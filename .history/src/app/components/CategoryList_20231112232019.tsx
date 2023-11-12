import axios from 'axios';
import Link from 'next/link';
import Slider from './Slider';

export default async function CategoryList() {
  const categories = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}categories`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data.contents;
    });
  return (
    <ul className="slider card__list">
      <Slider categories={categories} />
    </ul>
  );
}
