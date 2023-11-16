import Header from '@/app/components/Header';
import axios from 'axios';

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
      return res.data;
    });
  return (
    <>
      <Header isThum={true} spWaypoint={300} pcWaypoint={500} />
      <main>
        <div id="mainvisual">
          <picture>
            <source media="(max-width: 767px)" srcSet={content.imageSp.url} />
            <source media="(min-width: 768px)" srcSet={content.image.url} />
            <img src={content.image.url} alt="サムネイル" />
          </picture>
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
