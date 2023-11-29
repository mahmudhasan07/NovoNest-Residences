import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            // autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className=' mx-auto lg:my-10 my-5'
        >
            <SwiperSlide>
                <div className="hero lg:h-[500px] " style={{ backgroundImage: 'url(https://i.ibb.co/F6SRmfr/image20.jpg)' }}>
                    <div className="hero-content justify-start z-50 text-neutral-content bg-opacity-20  hero-overlay">
                        <div >
                            <div data-aos="fade-up">
                                <h1 className="text-5xl text-white font-bold">Drawing Room</h1>
                            </div>
                            <p className="py-6 text-gray-50">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <button className="btn btn-primary">See Apartment Flats</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/ZfgGcT7/image25.jpg)' }}>
                    <div className="hero-content justify-start z-50 text-neutral-content bg-opacity-20  hero-overlay">
                        <div className="w-1/2">
                            <h1 className="text-5xl text-white font-bold">Bed Room</h1>
                            <p className="py-6 text-gray-50">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">See Apartment Flats</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/VLsGk9C/image17.jpg)' }}>
                    <div className="hero-content justify-start z-50 text-neutral-content bg-opacity-20  hero-overlay">
                        <div className="w-1/2">
                            <h1 className="text-5xl text-white font-bold">Kitchen Room</h1>
                            <p className="py-6 text-gray-50">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">See Apartment Flats</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/p44L9g8/image40.jpg)' }}>
                    <div className="hero-content justify-start z-50 text-neutral-content bg-opacity-20  hero-overlay">
                        <div className="w-1/2">
                            <h1 className="text-5xl text-white font-bold">Bath Room</h1>
                            <p className="py-6 text-gray-50">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">See Apartment Flats</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;