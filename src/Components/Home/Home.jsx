
import { useContext } from "react";
import useFetch from "../Hooks/useFetch";
import { Context } from "../ContextAPI/ContextAPI";
import Banner from "./Banner";
import BuildInfo from "./BuildInfo";
import Coupons from "./Coupons";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";



const Home = () => {
    const {user} = useContext(Context)
    // console.log(user?.email);
    const [dataAdmin] = useAdmin()
    const [dataMember] = useMember()

    console.log(dataAdmin);
    console.log(dataMember);
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <BuildInfo></BuildInfo>
            </div>
            <div>
                <Coupons></Coupons>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-center my-10">Our Location</h1>
                <div>

                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.895204623886!2d90.3979046173828!3d23.7928478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7389a591ffb%3A0x152ffd6eb4b5b38e!2sResidence!5e0!3m2!1sen!2sbd!4v1700845761191!5m2!1sen!2sbd" className="w-full h-96"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </section>
    );
};

export default Home;