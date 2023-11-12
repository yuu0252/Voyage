import Image from 'next/image';
import './styles/home.scss';
import { notoserifjp } from './fonts';
import axios from 'axios';
import { client } from '../../libs/client';

export default async function Home() {
  const data = await client.get({
    endpoint: 'blogs',
  });
  return (
    <>
      <section class="mainvisual">
        <video src="./images/メインビジュアル.mov" autoplay muted></video>
        <h2 class="catch">
          英語の世界を
          <br />
          深く探検
          <br />
          しよう
        </h2>
      </section>
      <section
        dangerouslySetInnerHTML={{
          __html: `${data.contents[0].content}`,
        }}
      />
    </>
  );
}
