import Header from '@/app/components/Header';
import axios from 'axios';
import './style.scss';
import Article from '@/app/components/Article';
import { redirect } from 'next/navigation';

type params = {
  content: string;
};

export default async function Content({ params }: { params: params }) {
  let isFailed = false;
  const content = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}contents/${params.content}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
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
      <Header isThum={true} spWaypoint={300} pcWaypoint={500} />
      {isFailed || <Article content={content} />}
    </>
  );
}
