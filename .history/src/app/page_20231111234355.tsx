import CategoryList from './components/CategoryList';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <HomePage>
      <section>
        <div className="container">
          <CategoryList />
        </div>
      </section>
    </HomePage>
  );
}
