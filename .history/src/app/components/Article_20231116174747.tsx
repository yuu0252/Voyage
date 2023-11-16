export default function Article({ content }: { content: object }) {
  return (
    <main>
      <div id="mainvisual">
        <picture>
          <source media="(max-width: 767px)" srcSet={content.imageSp.url} />
          <source media="(min-width: 768px)" srcSet={content.image.url} />
          <img src={content.image.url} alt="サムネイル" />
        </picture>
      </div>
      <section id="article">
        <div className="container">
          <h2 className="title">{content.title}</h2>
          <p className="description">{content.description}</p>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
      </section>
    </main>
  );
}
