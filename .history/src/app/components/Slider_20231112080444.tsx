import { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      Infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./images/矢印ボタン　左1.png" class="slick-prev">',
      nextArrow: '<img src="./images/矢印ボタン　右1.png" class="slick-next">',
      centerMode: true,
      variableWidth: true,
      dots: true,
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
