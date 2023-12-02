import Image from 'next/image';
import HomePage from './components/HomePage';
import SwiperList from './components/SwiperList';
import Header from './components/Header';
import Loading from './loading';

export default function Home() {
  return (
    <>
      <Header isThum={true} />
      <main>
        <HomePage>
          <section id="content">
            <div className="container container--no-margin">
              <div className="section-title section-title--no-margin">
                <Image
                  width={30}
                  height={30}
                  src="/images/pen.png"
                  alt="アイコン:ペン"
                  className="section-title__icon"
                />
                <h2 className="section-title__text">学習コンテンツ</h2>
              </div>
              <SwiperList category="categories" />
            </div>
          </section>
        </HomePage>
      </main>
    </>
  );
}
