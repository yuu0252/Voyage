import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
  let arr = Array(5);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {arr.forEach((e, i) => (
        <SwiperSlide>Slider </SwiperSlide>
      ))}
    </Swiper>
  );
};
