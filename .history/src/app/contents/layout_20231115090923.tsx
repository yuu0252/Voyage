import './style.scss';
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
