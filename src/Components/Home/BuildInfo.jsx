import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BuildInfo = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <section className="flex flex-wrap lg:my-16 my-8">
            <div data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                         className="lg:flex-1">
                <img className="w-10/12 mx-auto rounded-lg" src="https://i.ibb.co/3WDj4xj/Screenshot-2023-11-24-212501.png" alt="" />
            </div>
            <div data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
             className="lg:flex-1 p-1">
                <h1 className="text-2xl text-center font-bold my-2">Details Of Your Building </h1>
                <h1><span className="text-base font-semibold text-black">Name: </span>Novo Nest Residences</h1>
                <h1><span className="text-base font-semibold text-black">Location:</span> Gulshan Avenue, Gulshan, Dhaka</h1>
                <h1 className="text-base font-bold my-1 text-black">Description:</h1>
                <p><span className="text-base font-semibold text-black">Architecture: </span> Oasis Residences stands tall amidst the skyline, boasting a contemporary architectural design that seamlessly blends sophistication and functionality</p>
                <div className="my-1">
                    <h1 className="text-base font-bold text-black">Apartment Features: </h1>
                    <p><span className="text-base font-semibold text-black">Luxurious Interiors: </span>The apartments offer spacious layouts with high ceilings and elegant finishes. They come in various configurations, from cozy studios to expansive penthouses, catering to different lifestyle needs.</p>
                    <p><span className="text-base font-semibold text-black">Smart Home Technology: </span>Each unit is equipped with state-of-the-art smart home features, allowing residents to control lighting, temperature, and security systems through their smartphones.</p>
                    <p><span className="text-base font-semibold text-black">Scenic Views: </span> Many apartments offer panoramic views of Gulshan Lake or the cityscape, providing a serene backdrop amidst the urban bustle.</p>
                </div>

                <div className="my-1">
                    <h1 className="text-base font-bold text-black">Security and Services:</h1>
                    <p><span className="text-base font-semibold text-black">24/7 Security: </span> State-of-the-art surveillance systems, manned security, and controlled access ensure a safe and secure environment for residents.</p>
                    <p><span className="text-base font-semibold text-black">Concierge Services: </span>Dedicated concierge services to assist residents with various needs, including reservations, package handling, and maintenance requests.</p>
                    <p><span className="text-base font-semibold text-black">Parking: </span>Ample covered parking space for residents and guests.</p>
                </div>
            </div>
        </section>
    );
};

export default BuildInfo;