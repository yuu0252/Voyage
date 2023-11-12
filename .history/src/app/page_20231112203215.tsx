import Image from 'next/image';
import CategoryList from './components/CategoryList';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <HomePage>
      <section>
        <div className="container">
          <div className="section-title">
            <Image
              src="/images/万年筆アイコン4.png"
              alt="アイコン:ペン"
              className="section-title__icon"
              fill
            />
            <h2 className="section-title__text">学習コンテンツ</h2>
          </div>
          <SimpleSlider />
        </div>
      </section>
    </HomePage>
  );
}
