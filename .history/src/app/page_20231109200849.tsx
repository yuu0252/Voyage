import Image from 'next/image';
import './styles/home.scss';
import axios from 'axios';
import { client } from '../../libs/client';
import ReactPlayer from 'react-player';

export default async function Home() {
  const data = await client.get({
    endpoint: 'blogs',
  });
  return (
    <>
      <section className="mainvisual">
        <video src="/images/メインビジュアル.mov" autoPlay muted />
        <h2 className="catch">
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
