import Header from '@/app/components/Header';
import axios from 'axios';
import './style.scss';
import Article from '@/app/components/Article';
import { redirect } from 'next/navigation';

type params = {
  content: string;
};

export async function generateMetadata(title: string) {
  const content = await axios
    .get(`${process.env.MICROCMS_URL}contents/${params.content}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      redirect('/contents');
    });
  return { title: title };
}

export default async function Content({ params }: { params: params }) {
  const content = await axios
    .get(`${process.env.MICROCMS_URL}contents/${params.content}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      redirect('/contents');
    });

  return (
    <>
      <Header isThum={true} spWaypoint={300} pcWaypoint={700} />
      <Article content={content} />
    </>
  );
}
