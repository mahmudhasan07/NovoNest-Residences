import useFetch from "../Hooks/useFetch";
import ContentLoader from 'react-content-loader'
import Loader from "../Loader/Loader";
import Card from "./Cards";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Apartments = () => {
    
    const [sort, setsort] = useState('')
    const [data] = useFetch('apartments',sort)
    const [currentpage, setcurrentpage] = useState(1)
    const [start, setstart] = useState(0)
    const [end, setend] = useState(6)
    console.log(data);

    const page = Math.ceil(data.length / 6)
    const totalpage = [...Array(page).keys()]
    console.log(totalpage);
    const handlebtn = (i) => {
        setcurrentpage(i)
        setstart(6 * i - 6)
        setend(6 * i)
    }

    const handlesort = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        
        if(value == "default"){
            setsort('')
        }
        else{
            setsort(value)
        }


    }


    return (
        <section>
            <div className="flex justify-end my-10 ">
                <select onChange={handlesort} name="sort" id="" className="border-2 w-40 p-1 rounded-xl mr-10">
                    <option value="default">Default</option>
                    <option value="sortLtoH">Low to High</option>
                    <option value="sortHtoL">High to Low</option>
                </select>
            </div>
            <div>
                {
                    data == 'l' ?
                        <div className="">
                            <Loader></Loader>
                        </div>
                        :
                        data !== "A" ?
                            <div className="flex flex-wrap justify-center gap-5 ">
                                {
                                    data?.slice(start, end).map((element, idx, ) => <Cards key={idx}  card={element}></Cards>)
                                }
                            </div>
                            :
                            <h1 className="text-2xl text-center font-semibold">No Data Found</h1>
                }
            </div>
            <div className="flex justify-center gap-5 my-5">
                {
                    totalpage?.map((i, idx) => <button onClick={() => handlebtn(i + 1)} className={currentpage == i + 1 ? "btn bg-blue-600 text-white" : "btn"} key={idx}>{i + 1}</button>)
                }
            </div>

        </section>
    );
};

export default Apartments;