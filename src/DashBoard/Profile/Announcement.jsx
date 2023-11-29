import { useState } from "react";
import useFetch from "../../Components/Hooks/useFetch";

const Announcement = () => {
    const [value2, setvalue2] = useState('')
    const [data] = useFetch('notice', value2)
    // const [array, setarray] = useState(data)
    const handlesort = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        setvalue2(value)

    }
    return (
        <section>
            <h1 className='text-3xl font-bold text-center lg:mb-10 mb-5'>See Announcement</h1>
            <div className="flex justify-end">
                <select onChange={handlesort} className="border-2 my-3 p-1 rounded-lg border-black" name="" id="">
                    <option value="">Default</option>
                    <option value="latest">Latest Announcement</option>
                    <option value="oldest">Oldest Announcement</option>
                </select>
            </div>
            <div>
                <div className=''>
                    {
                        data == 'l' ?
                            <h1>Loading</h1>
                            :
                            data?.map((element, idx) =>
                                <div data-aos="fade-down"
                                // data-aos-offset="500"
                                data-aos-easing="ease-in-sine"
                                data-aos-delay={`${idx * 400}`}
                                 className='p-2 border-2 my-2  rounded-xl' key={idx}>
                                    <div className='flex justify-between mb-5'>
                                        <h1 className='text-2xl font-semibold ' >{element.title}</h1>
                                        <h1 className='text-2xl font-semibold ' >{element.updateDate}</h1>

                                    </div>
                                    <p className='text-lg'>{element.note}</p>
                                </div>

                            )
                    }
                </div>
            </div>
        </section>
    );
};

export default Announcement;