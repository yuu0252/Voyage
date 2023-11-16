import ContentList from '@/app/components/ContentList';
import Image from 'next/image';
import './style.scss';
import Header from '@/app/components/Header';

export default function ContentListPage() {
  return (
    <>
      <Header />
      <main>
        <section id="content">
          <div className="container">
            <div className="section-title">
              <Image
                src="/images/万年筆アイコン4.png"
                alt="アイコン"
                className="section-title__icon"
                width={50}
                height={50}
              />
              <h2 className="section-title__text">ちょこっと英単語</h2>
            </div>
            <ContentList category="pocket-word" />
          </div>
        </section>
      </main>
    </>
  );
}
