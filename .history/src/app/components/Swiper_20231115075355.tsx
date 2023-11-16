'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';

type content = {
  id: string;
  name: string;
  description: string;
  introduction: string;
  image: {
    url: string;
  };
};

export default function SwiperItem({ contents }: { contents: Array<content> }) {
  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={500}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {contents.map((content: content) => (
          <SwiperSlide key={content.id}>
            <li key={content.id}>
              <Link className="card__item" href={`/contents/${content.id}`}>
                <img
                  src={content.image.url}
                  alt={content.name}
                  className="card__img"
                />
                <h3 className="card__title">{content.name}</h3>
                <div
                  className="card__text"
                  dangerouslySetInnerHTML={{
                    __html: `${content.introduction}`,
                  }}
                />
              </Link>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
