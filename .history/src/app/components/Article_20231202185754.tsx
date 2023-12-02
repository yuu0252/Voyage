import { Metadata } from 'next';
import Mainvisual from './Mainvisual';

export const metadata: Metadata = {
  title: 'aaa',
};

export async function generateMetadata(title: string) {
  return { title: title };
}

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
  generateMetadata(content.title);
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
