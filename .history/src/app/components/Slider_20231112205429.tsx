import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
  )
}
