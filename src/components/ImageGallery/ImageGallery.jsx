
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import ImageGallery1 from '../../utils/images/gallery1.jpg';
import ImageGallery2 from '../../utils/images/gallery23.webp';
import ImageGallery3 from '../../utils/images/gallery3.jpg';
import ImageGallery4 from '../../utils/images/gallery25.jpg';
import ImageGallery5 from '../../utils/images/gallery13.jpg';
import ImageGallery6 from '../../utils/images/gallery22.jpg';
import ImageGallery7 from '../../utils/images/gallery44.jpg';
import ImageGallery8 from '../../utils/images/gallery55.jpg';
import ImageGallery9 from '../../utils/images/gallery9.jpg';
import ImageGallery10 from '../../utils/images/gallery10.jpg';

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    ImageGallery1, ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5,
    ImageGallery6, ImageGallery7, ImageGallery8, ImageGallery9, ImageGallery10
  ];

  return (
    <div className="flex flex-col items-center w-full py-5">
      <Swiper
        style={{
          '--swiper-navigation-color': 'black',
          '--swiper-pagination-color': 'black',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-1/2 h-[50rem] sm:w-11/12"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center bg-gree-400">
            <img className="w-full h-full object-contain border-0" src={image} alt="food" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-1/2 h-[20rem] sm:w-11/12 mt-5 "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="opacity-40 hover:opacity-100 transition-opacity duration-300 ">
            <img className="w-full h-full object-contain border-0" src={image} alt="food" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
