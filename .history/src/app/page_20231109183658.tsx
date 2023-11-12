import Image from 'next/image';
import './styles/home.scss';
import { notoserifjp } from './fonts';
import axios from 'axios';
import { client } from '../../libs/client';

export default async function Home() {
  const data = await client.get({
    endpoint: 'blogs',
  });
  console.log(data);
  return (
    <>
      <div>{data.text}</div>
    </>
  );
}
