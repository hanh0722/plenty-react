import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Pagination } from 'swiper';
import Swiper from './Swiper';
const SwiperComponent = () => {
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        
        ...
      </Swiper>
    );
  };

export default SwiperComponent;