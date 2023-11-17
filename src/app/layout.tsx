import type { Metadata } from 'next';

import './globals.css';
import 'ress';
import Footer from './components/Footer';
import { notosansjp } from './constants';

export const metadata: Metadata = {
  title: 'Voyage',
  description:
    '当サイト「Voyage」では英語を核心の意味から学んでいけるようコンテンツを配信していきます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notosansjp.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
