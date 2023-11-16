import './style.scss';

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
      <body className={notosansjp.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
