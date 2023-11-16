import Header from '@/app/components/Header';
import axios from 'axios';
import Image from 'next/image';

type params = {
  content: string;
};

export default async function Content({ params }: { params: params }) {
  const content = await axios
    .get(`${process.env.NEXT_PUBLIC_MICROCMS_URL}contents/${params.content}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_AUTH_KEY,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
  return (
    <>
      <Header />
      <main>
        <div id="mainvisual">
          <Image src={content.image.url} width={10} height={10} />
        </div>
        <section id="pocket-word">
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </section>
      </main>
    </>
  );
}
