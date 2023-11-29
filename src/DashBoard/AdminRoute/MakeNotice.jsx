import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxios, { AxiosSecure } from '../../Components/Axios/useAxios';
import useFetch from '../../Components/Hooks/useFetch';
import AOS from 'aos'

const MakeNotice = () => {
    const [value2, setvalue2] = useState('')
    const axiosLink = useAxios(AxiosSecure)
    const [data, refetch] = useFetch('notice', value2)
    console.log(data);
    const { register, reset, handleSubmit } = useForm()
    const handlesort = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        setvalue2(value)

    }

    const onSubmit = (data) => {
        const currentTime = new Date()
        const date = currentTime.getDate()
        const month = currentTime.getMonth() + 1
        const year = currentTime.getFullYear()
        const updateDate = date + "-" + month + "-" + year
        // console.log(updateDate);
        // console.log(data)
        const title = data.title
        const note = data.note
        const notice = { title, note, updateDate }
        console.log(notice);

        axiosLink.post(`/notice`, notice)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section>
            <h1 className='text-3xl font-bold text-center mb-5'>Announcement</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-2 flex-wrap">
                        <input className="border-2 border-black p-1 rounded-lg" placeholder="title" {...register('title')} />
                        {/* <input className="border-2 border-black p-1 rounded-lg" placeholder="discount" {...register('discount')} />
                        <input className="border-2 border-black p-1 rounded-lg" placeholder="code" {...register('code')} /> */}
                    </div>
                    <textarea className="border-2 border-black my-2 p-1 rounded-xl w-full lg:h-32 h-20" placeholder="Enter Note" name="" id="" {...register('note')} /> <br />
                    <input className="btn w-full glass bg-blue-700 text-white text-base" type="submit" />
                </form>
            </div>

            <div>
                <h1 className='text-3xl font-bold text-center lg:my-10 my-5'>See Announcement</h1>
                <div className="flex justify-end">
                    <select onChange={handlesort} className="border-2 my-3 p-1 rounded-lg border-black" name="" id="">
                        <option value="">Default</option>
                        <option value="latest">Latest Announcement</option>
                        <option value="oldest">Oldest Announcement</option>
                    </select>
                </div>
                <div className=''>
                    {
                        data == 'l' ?
                            <h1>Loading</h1>
                            :
                            data?.map((element, idx) =>
                                <div data-aos="fade-down"
                                    // data-aos-offset="500"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-delay={`${idx * 400}`} className='p-2 border-2 my-2  rounded-xl' key={idx}>
                                    <div data-aos="fade-right"
                                        // data-aos-offset="500"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-delay={`${idx * 400}`}
                                        className='flex justify-between mb-5'>
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

export default MakeNotice;