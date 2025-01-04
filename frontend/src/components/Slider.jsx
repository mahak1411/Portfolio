import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core styles
import 'swiper/css/pagination'; // Pagination styles
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
