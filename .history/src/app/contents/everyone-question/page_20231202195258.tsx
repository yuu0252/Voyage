import ContentList from '@/app/components/ContentList';
import Image from 'next/image';
import '../style.scss';
import Header from '@/app/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'みんなの疑問',
  description:
    'ニュアンスの違いや、みんなが間違えたり悩んだりしてしまう英語をコアの意味から理解して使いこなそう。',
};

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
                src="/images/graduate.png"
                alt="アイコン"
                className="section-title__icon"
              />
              <h2 className="section-title__text">みんなの疑問</h2>
            </div>
            <ContentList category="everyone-question" />
          </div>
        </section>
      </main>
    </>
  );
}
