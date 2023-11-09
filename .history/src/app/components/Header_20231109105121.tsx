import { notoserifjp } from '../fonts';
import '../styles/header.scss';

export default function Header() {
  return (
<header class="header">
        <div class="header-container">
            <div><a href="#" class="header__logo">
                <img src="./images/本.png" alt="Deeply" class="header__icon">
                <h1 class="header__title"><span class="sub-title">英語を深く学ぼう</span><br>Deeply</h1>
            </a></div>
            <nav>
                <ul class="g-nav">
                    <li><a href="#" class="g-nav__title">ホーム</a></li>
                    <li class="has-child">
                        <h3 class="g-nav__title accordion__title">コンテンツ&nbsp;<img src="./images/矢印ボタン　下3.png" alt="アイコン:矢印 下" class="accordion__icon"></h3>
                        <ul class="accordion">
                            <li class="accordion__item"><a href="#">英単語・熟語</a></li>
                            <li class="accordion__item"><a href="#">試験対策</a></li>
                            <li class="accordion__item"><a href="#">オンライン英会話</a></li>
                            <li class="accordion__item"><a href="#">おすすめ参考書</a></li>
                        </ul>
                    </li>
                    <li class="has-child">
                        <h3 class="g-nav__title accordion__title">SNSシェア&nbsp;<img src="./images/矢印ボタン　下3.png" alt="アイコン:矢印 下" class="accordion__icon"></h3>
                        <ul class="accordion">
                            <li class="accordion__item"><a href="#">Twitter&nbsp;<i class="bi bi-twitter"></i></a></li>
                            <li class="accordion__item"><a href="#">Instagram&nbsp;<i class="bi bi-instagram"></i></a></li>
                            <li class="accordion__item accordion__item--uppercase"><a href="#">Line&nbsp;<i class="bi bi-line"></i></a></li>
                            <li class="accordion__item"><a href="#">Facebook&nbsp;<i class="bi bi-facebook"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="openbtn"><span></span><span></span><span></span></div>
        </div>
    </header>
  );
}
