import Image from 'next/image';
import CategoryList from './components/CategoryList';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <HomePage>
      <section>
        <div className="container container--no-margin">
          <div className="section-title section-title--no-margin">
            <Image
              src="/images/万年筆アイコン4.png"
              alt="アイコン:ペン"
              className="section-title__icon"
              width={50}
              height={50}
            />
            <h2 className="section-title__text">学習コンテンツ</h2>
          </div>
          <CategoryList />
        </div>
      </section>
    </HomePage>
  );
}
