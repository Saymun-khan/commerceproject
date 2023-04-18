import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ProfileOne from '../img/pro.jpg';
import ProfileTwo from '../img/profile.jpg';


// Import Swiper styles
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
  return (
    <div className="bg-white">
        <Swiper
            modules={[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{draggable:true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image width={500} className="ml-30" height={400} src={ProfileOne} />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={500} height={400} src={ProfileTwo} />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={500} className="ml-30" height={400} src={ProfileOne} />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={500} height={400} src={ProfileTwo} />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={500} className="ml-30" height={400} src={ProfileOne} />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={500} height={400} src={ProfileTwo} />
            </SwiperSlide>
            
        </Swiper>
    </div>
  
  )
}

export default Slide