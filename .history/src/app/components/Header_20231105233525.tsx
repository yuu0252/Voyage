import './header.scss';

export default function Header() {
  return (
    <header>
      <h1>Deeply</h1>
      <button className="hamburger">
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
      </button>
    </header>
  );
}
