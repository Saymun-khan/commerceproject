import { faArrowDown, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Data from "./Data";


//
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AboutTeam = () => {
  return (
    <div>
        <div className="p-20">
            <div className="mb-16 grid grid-cols-2">
                <div>
                    <h1 className="text-5xl font-extrabold">One <span className="text-red-500">Team</span>,<br></br>Many Talents</h1>
                </div>
                <div>
                    <h1 className="text-medium font-extralight justify-end text-end mt-16">Join Our Team<FontAwesomeIcon className="ml-4" icon={faArrowDown} /></h1>
                    
                    <div className="w-40 h-0.5 bg-red-500"></div>
                </div>
            </div>
            <div>
            <Swiper
            modules={[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{draggable:true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div>
                    <div>
                        <Image src={Data[0].img} width={300} height={250} />
                        <div className="ml-56 relative -mt-28">
                            <div className="w-10 h-10 bg-blue-600 p-2 mb-0.5">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                            <div className="w-10 h-10 bg-blue-600 p-2">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold mt-12">{Data[0].title}</h1>
                    <h1>{Data[0].price}</h1>
                </div>
                
            </SwiperSlide>    
            <SwiperSlide>
                <div>
                    <div>
                        <Image src={Data[0].img} width={300} height={250} />
                        <div className="ml-56 relative -mt-28">
                            <div className="w-10 h-10 bg-blue-600 p-2 mb-0.5">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                            <div className="w-10 h-10 bg-blue-600 p-2">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold mt-12">{Data[0].title}</h1>
                    <h1>{Data[0].price}</h1>
                </div>
                
            </SwiperSlide>       
            <SwiperSlide>
                <div>
                    <div>
                        <Image src={Data[0].img} width={300} height={250} />
                        <div className="ml-56 relative -mt-28">
                            <div className="w-10 h-10 bg-blue-600 p-2 mb-0.5">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                            <div className="w-10 h-10 bg-blue-600 p-2">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold mt-12">{Data[0].title}</h1>
                    <h1>{Data[0].price}</h1>
                </div>
                
            </SwiperSlide>    
            <SwiperSlide>
                <div>
                    <div>
                        <Image src={Data[0].img} width={300} height={250} />
                        <div className="ml-56 relative -mt-28">
                            <div className="w-10 h-10 bg-blue-600 p-2 mb-0.5">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                            <div className="w-10 h-10 bg-blue-600 p-2">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold mt-12">{Data[0].title}</h1>
                    <h1>{Data[0].price}</h1>
                </div>
                
            </SwiperSlide>    
            <SwiperSlide>
                <div>
                    <div>
                        <Image src={Data[0].img} width={300} height={250} />
                        <div className="ml-56 relative -mt-28">
                            <div className="w-10 h-10 bg-blue-600 p-2 mb-0.5">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                            <div className="w-10 h-10 bg-blue-600 p-2">
                                <FontAwesomeIcon icon={faMessage} className="text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold mt-12">{Data[0].title}</h1>
                    <h1>{Data[0].price}</h1>
                </div>
                
            </SwiperSlide>    
        </Swiper>
                
            </div>
        </div>
    </div>
  )
}

export default AboutTeam