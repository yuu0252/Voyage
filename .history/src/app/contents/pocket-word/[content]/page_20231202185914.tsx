import Header from '@/app/components/Header';
import axios from 'axios';
import './style.scss';
import Article from '@/app/components/Article';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

type params = {
  content: string;
};

export const metadata: Metadata = {
  title: 'aaa',
};

export async function generateMetadata(title: string) {
  return { title: title };
}

export default async function Content({ params }: { params: params }) {
  let isFailed = false;
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
