import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { fruits } from '../data/fruits';
import SlideItem from './SlideItem';

const FruitSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        speed={900}
        loop={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ height: '100%', width: '100%' }}
      >
        {fruits.map((fruit, index) => (
          <SwiperSlide key={fruit.id}>
            <SlideItem fruit={fruit} isActive={activeIndex === index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FruitSlider;