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
                        <div data-aos="fade-up"
                            data-aos-offset="500"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                            <div>
                                <h1 className="text-5xl text-white font-bold">Drawing Room</h1>
                            </div>
                            <p className="py-6 text-gray-50">From the strokes of creativity to the canvas of comfort, welcome to a world where kitchen dreams simmer, bathroom serenity flows, and bedrooms embrace tranquility. Let the artistry of design paint your spaces with inspiration and elegance. Welcome to a masterpiece of home living.</p>
                            <div
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
                            <p className="py-6 text-gray-50">From the strokes of creativity to the canvas of comfort, welcome to a world where kitchen dreams simmer, bathroom serenity flows, and bedrooms embrace tranquility. Let the artistry of design paint your spaces with inspiration and elegance. Welcome to a masterpiece of home living.</p>
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
                            <p className="py-6 text-gray-50">From the strokes of creativity to the canvas of comfort, welcome to a world where kitchen dreams simmer, bathroom serenity flows, and bedrooms embrace tranquility. Let the artistry of design paint your spaces with inspiration and elegance. Welcome to a masterpiece of home living.</p>
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
                            <p className="py-6 text-gray-50">From the strokes of creativity to the canvas of comfort, welcome to a world where kitchen dreams simmer, bathroom serenity flows, and bedrooms embrace tranquility. Let the artistry of design paint your spaces with inspiration and elegance. Welcome to a masterpiece of home living.</p>
                            <button className="btn btn-primary">See Apartment Flats</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;