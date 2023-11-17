import '../styles/home.scss';
import Introduction from './Introduction';

type Children = {
  children: React.ReactNode;
};

export default function HomePage({ children }: Children) {
  return (
    <>
      <section id="mainvisual">
        <video src="/images/mainvisual.mp4" loop autoPlay muted playsInline />
        <h2 className="catch">
          英語の世界を
          <br />
          深く探検
          <br />
          しよう
        </h2>
      </section>
      <Introduction />
      {children}
    </>
  );
}
