import Image from 'next/image';
import './style.scss';
import Header from '@/app/components/Header';
import CategoryList from '../components/CategoryList';

export default function ContentListPage() {
  return (
    <>
      <Header />
      <main>
        <section id="content">
          <div className="container">
            <div className="section-title">
              <Image
                width={30}
                height={30}
                src="/images/万年筆アイコン4.png"
                alt="アイコン"
                className="section-title__icon"
              />
              <h2 className="section-title__text">コンテンツ一覧</h2>
            </div>
            <CategoryList />
          </div>
        </section>
      </main>
    </>
  );
}
