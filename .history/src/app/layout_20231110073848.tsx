import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import 'ress';
import Header from './components/Header';
import { notosansjp } from './fonts';
import Footer from './components/Footer';

const notosansjp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deeply',
  description:
    '当サイト「Deeply」では英語を核心の意味から学んでいけるようコンテンツを配信していきます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notosansjp.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
