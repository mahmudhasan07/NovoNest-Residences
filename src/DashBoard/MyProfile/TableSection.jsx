import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch2 from '../../Components/Hooks/useFetch2';
import { useContext } from 'react';
import { Context } from '../../Components/ContextAPI/ContextAPI';

const TableSection = () => {
    const { user } = useContext(Context)
    const [data] = useFetch2('agreements', "completed")
    console.log(data);
    return (
        <section>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='text-lg font-semibold'>
                        <TableRow className=''>
                            <TableCell className='text-lg font-semibold' align="right">Flat No</TableCell>
                            <TableCell className='text-lg font-semibold' align="right">Floor No</TableCell>
                            <TableCell className='text-lg font-semibold' align="right">Block</TableCell>
                            <TableCell className='text-lg font-semibold' align="right">Rent</TableCell>
                            <TableCell className='text-lg font-semibold' align="right">Agreement Accept Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data == 'l' ?
                                <h1>loading</h1>
                                :
                                data?.length == 0 ?
                                    <TableRow
                                        key={'none'}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            none
                                        </TableCell>
                                        <TableCell align="right">none</TableCell>
                                        <TableCell align="right">none</TableCell>
                                        <TableCell align="right">none</TableCell>
                                        <TableCell align="right">none</TableCell>
                                    </TableRow>
                                    :
                                    data?.map((element) => (
                                        <TableRow
                                            key={element?.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {element?.apartmentNo ? element?.apartmentNo : "none"}
                                            </TableCell>
                                            <TableCell align="right">{element?.floor ? element?.floor : "none"}</TableCell>
                                            <TableCell align="right">{element?.block ? element?.block : 'none'}</TableCell>
                                            <TableCell align="right">{element?.rent ? element?.rent : "none"}</TableCell>
                                            <TableCell align="right">{element?.agreementaccpectdate ? element?.agreementaccpectdate : "none"}</TableCell>
                                        </TableRow>
                                    ))
}
                    </TableBody>
                </Table>
            </TableContainer>

        </section>
    );
};

export default TableSection;