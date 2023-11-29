import { useContext, useRef, useState } from "react";
import useFetch2 from "../../Components/Hooks/useFetch2";
import { Context } from "../../Components/ContextAPI/ContextAPI";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PaymentHistory = () => {
    const { user } = useContext(Context)
    const [data] = useFetch2(`payment-success`, user?.email)
    const [array, setarray] = useState(data)
    const search = useRef()
    console.log(array);

    const handlesearch = () => {
        const values = search.current.value
        const find = data.filter((element, idx) => element.rentMonth.toLowerCase().includes(values.toLowerCase()))
        console.log(find);
        setarray(find)
    }
    return (
        <section>
            <h1 className="text-2xl font-bold text-center mb-5">Payment History</h1>
            <div className="flex justify-end mb-3">
                <input ref={search} type="text" className="border-2 w-52 rounded-lg border-blue-700 p-1" placeholder="Enter Month" />
                <button onClick={handlesearch} className="btn btn-sm btn-primary" >find</button>
            </div>

            <div >
                <TableContainer className="overflow-x-scroll" component={Paper}>
                    <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className='text-lg font-semibold'>
                            <TableRow className=''>
                                <TableCell className='text-lg font-semibold' align="center">Flat No</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Floor No</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Block</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Rent</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Month</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {
                                array == 'l' ?
                                    <h1>loading</h1>
                                    :
                                    array?.length == 0 ?
                                        <TableRow
                                            key={'none'}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                none
                                            </TableCell>
                                            <TableCell align="center">none</TableCell>
                                            <TableCell align="center">none</TableCell>
                                            <TableCell align="center">none</TableCell>
                                            <TableCell align="center">none</TableCell>
                                            <TableCell align="center">none</TableCell>
                                        </TableRow>
                                        :
                                        array?.map((element, idx) => (
                                            <TableRow data-aos="fade-down"
                                                // data-aos-offset="500"
                                                data-aos-easing="ease-in-sine"
                                                data-aos-delay={`${idx * 200}`}
                                                key={idx}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" align="center" scope="row">
                                                    {element?.apartmentNo ? element?.apartmentNo : "none"}
                                                </TableCell>
                                                <TableCell align="center">{element?.floor ? element?.floor : "none"}</TableCell>
                                                <TableCell align="center">{element?.block ? element?.block : 'none'}</TableCell>
                                                <TableCell align="center">{element?.rent ? element?.rent : "none"}</TableCell>
                                                <TableCell align="center">{element?.rentMonth ? element?.rentMonth : "none"}</TableCell>
                                                <TableCell align="center">{element?.payment ? element?.payment : "none"}</TableCell>
                                            </TableRow>
                                        ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
};

export default PaymentHistory;