import Mainvisual from './Mainvisual';

export const metadata = {
  title: '...',
};

// Dynamic metadata
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
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
