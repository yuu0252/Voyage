'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';

type category = {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
};

export default function Slider({ categories }) {
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3.5,
          },
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {categories.map((category: category) => (
          <SwiperSlide key={category.id}>
            <li key={category.id}>
              <Link className="card__item" href={`/categories/${category.id}`}>
                <img
                  src={category.image.url}
                  alt={category.name}
                  className="card__img"
                />
                <h3 className="card__title">{category.name}</h3>
                <div
                  className="card__text"
                  dangerouslySetInnerHTML={{
                    __html: `${category.description}`,
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
