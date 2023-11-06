import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'ress';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
