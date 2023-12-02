import ContentList from '@/app/components/ContentList';
import Image from 'next/image';
import '../style.scss';
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
                width={30}
                height={30}
                src="/images/book.png"
                alt="アイコン"
                className="section-title__icon"
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
