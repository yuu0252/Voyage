import Image from 'next/image';
import './styles/home.scss';
import axios from 'axios';

export default function Home() {
  axios.get('https://qk006l9l23.microcms.io/api/v1/blogs').then((res) => {
    console.log(res.data);
  });
  return (
    <>
      <div>{}</div>
    </>
  );
}
