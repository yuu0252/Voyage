import Image from 'next/image';
import './styles/home.scss';
import { notoserifjp } from './fonts';
import axios from 'axios';

export default function Home() {
  axios
    .get('https://qk006l9l23.microcms.io/api/v1/blogs', {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_URL,
      },
    })
    .then((res) => {
      console.log(res.data);
    });
  return (
    <>
      <div>{}</div>
    </>
  );
}
