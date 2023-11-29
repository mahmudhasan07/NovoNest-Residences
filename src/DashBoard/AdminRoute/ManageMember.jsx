import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from '../../Components/Hooks/useFetch';
import useFetch2 from '../../Components/Hooks/useFetch2';
import useAxios, { AxiosSecure } from '../../Components/Axios/useAxios';

const ManageMember = () => {
    const [data, refetch] = useFetch2('users', 'members')
    const axiosLink = useAxios(AxiosSecure)
    console.log(data);

    const handlemember = (id) => {
        console.log(id);
        axiosLink.put(`/users/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <section>
            <h1 className='text-3xl text-center my-5'>Manage Member</h1>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className='text-lg font-semibold'>
                            <TableRow className=''>
                                <TableCell className='text-lg font-semibold' align="center">Image</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Name</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Email</TableCell>
                                <TableCell className='text-lg font-semibold' align="center">Button</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className=''>
                            {
                                data == 'l' ?
                                    'loading'
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
                                        </TableRow>
                                        :
                                        data?.map((element) => (
                                            <TableRow
                                                key={element?.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <img className='w-11 mx-auto' src={element?.photo ? element?.photo : "none"} alt="" />
                                                </TableCell>
                                                <TableCell align="center">{element?.name ? element?.name : "none"}</TableCell>
                                                <TableCell align="center">{element?.email ? element?.email : 'none'}</TableCell>
                                                <TableCell align="center"><button onClick={() => handlemember(element._id)} className='btn btn-xs'>Remove</button></TableCell>
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

export default ManageMember;