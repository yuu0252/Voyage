import { notoserifjp } from '../fonts';
import '../styles/header';

export default function Header() {
  return (
    <header>
      <h1 className={notoserifjp.className}>Deeply</h1>
      <button className="hamburger">
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
        <span>MENU</span>
      </button>
    </header>
  );
}
