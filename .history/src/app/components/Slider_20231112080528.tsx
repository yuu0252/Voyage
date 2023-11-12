import { Component } from 'react';
import Slider from 'react-slick';
import CategoryList from './CategoryList';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      Infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // prevArrow: '<img src="./images/矢印ボタン　左1.png" class="slick-prev">',
      // nextArrow: '<img src="./images/矢印ボタン　右1.png" class="slick-next">',
      centerMode: true,
      variableWidth: true,
      dots: true,
      // autoplay: {
      //     delay: 0,
      // },
    };
    return (
      <Slider {...settings}>
        <CategoryList />
      </Slider>
    );
  }
}
