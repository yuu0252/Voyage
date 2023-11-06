import { notoserifjp } from '../fonts';
import './header.scss';

export default function Header() {
  return (
    <header>
      <h1 className={notoserifjp.className}>Deeply</h1>
      <button className="hamburger">
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar">MENU</div>
      </button>
    </header>
  );
}
