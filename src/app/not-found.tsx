import Header from './components/Header';
import './styles/notFound.scss';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <div className="not-found">
          <h2>ページが見つかりませんでした。</h2>
        </div>
      </main>
    </>
  );
}
