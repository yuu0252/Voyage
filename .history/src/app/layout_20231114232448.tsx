import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';
import 'ress';
import Footer from './components/Footer';

export const notosansjp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const notoserifjp = Noto_Serif_JP({
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
      <body className={`${notosansjp.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
