import Image from 'next/image';
import './styles/home.scss';
import { notoserifjp } from './fonts';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState();
  axios
    .get('https://qk006l9l23.microcms.io/api/v1/blogs', {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_URL,
      },
    })
    .then((res) => {
      setContent(res.data.content);
    });
  return (
    <>
      <div>{content}</div>
    </>
  );
}
