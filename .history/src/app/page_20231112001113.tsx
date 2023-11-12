import CategoryList from './components/CategoryList';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <HomePage>
      <section>
        <div className="container">
          <div className="section-title">
            <img
              src="./images/万年筆アイコン4.png"
              alt="アイコン:ペン"
              className="section-title__icon"
            />
            <h2 className="section-title__text">おすすめコンテンツ</h2>
          </div>
          <CategoryList />
        </div>
      </section>
    </HomePage>
  );
}
