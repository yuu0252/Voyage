import Image from 'next/image';
import { notoserifjp } from '../fonts';
import '../styles/header.scss';

export default function Header() {
  return (
<header className="header">
        <div className="header-container">
            <div><a href="#" className="header__logo">
                <Image src="./images/本.png" alt="Deeply" className="header__icon" />
                <h1 className="header__title"><span className="sub-title">英語を深く学ぼう</span><br>Deeply</h1>
            </a></div>
            <nav>
                <ul className="g-nav">
                    <li><a href="#" className="g-nav__title">ホーム</a></li>
                    <li className="has-child">
                        <h3 className="g-nav__title accordion__title">コンテンツ&nbsp;<Image src="./images/矢印ボタン　下3.png" alt="アイコン:矢印 下" className="accordion__icon" /></h3>
                        <ul className="accordion">
                            <li className="accordion__item"><a href="#">英単語・熟語</a></li>
                            <li className="accordion__item"><a href="#">試験対策</a></li>
                            <li className="accordion__item"><a href="#">オンライン英会話</a></li>
                            <li className="accordion__item"><a href="#">おすすめ参考書</a></li>
                        </ul>
                    </li>
                    <li className="has-child">
                        <h3 className="g-nav__title accordion__title">SNSシェア&nbsp;<Image src="./images/矢印ボタン　下3.png" alt="アイコン:矢印 下" className="accordion__icon" /></h3>
                        <ul className="accordion">
                            <li className="accordion__item"><a href="#">Twitter&nbsp;<i className="bi bi-twitter"></i></a></li>
                            <li className="accordion__item"><a href="#">Instagram&nbsp;<i className="bi bi-instagram"></i></a></li>
                            <li className="accordion__item accordion__item--uppercase"><a href="#">Line&nbsp;<i className="bi bi-line"></i></a></li>
                            <li className="accordion__item"><a href="#">Facebook&nbsp;<i className="bi bi-facebook"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="openbtn"><span></span><span></span><span></span></div>
        </div>
    </header>
  );
}
