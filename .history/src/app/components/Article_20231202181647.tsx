import Head from 'next/head';
import Mainvisual from './Mainvisual';
import { Metadata } from 'next';

export default function Article({
  content,
}: {
  content: {
    title: string;
    description: string;
    content: string;
    image: {
      url: string;
    };
    imageSp: {
      url: string;
    };
  };
}) {
  const metadata: Metadata = {
    title: content.title,
  };
  metadata;

  return (
    <>
      <main>
        <Mainvisual content={content} />
        <section id="article">
          <div className="container">
            <h2 className="title">{content.title}</h2>
            <p className="description">{content.description}</p>
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          </div>
        </section>
      </main>
    </>
  );
}
