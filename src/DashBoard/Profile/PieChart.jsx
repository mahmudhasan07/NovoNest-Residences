import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import useFetch from '../../Components/Hooks/useFetch';
import useFetch2 from '../../Components/Hooks/useFetch2';
// import { useState } from 'react';



const Piechart = () => {
    const [data1] = useFetch('apartments')
    const [data2] = useFetch2('agreements', 'complete', '')
    const length1 = data1 !== "l" ? data1.length : ''
    const length2 = data1 !== "l" ? data2.length : ''
    // console.log(length1, length2);
    const availableroom = length1 - length2
    const percentageroom = ((100 * availableroom) / length1)
    // console.log(percentageroom);


    const value = [
        { value: percentageroom.toFixed(2), label: 'Available Rooms' },
        { value: 100 - percentageroom.toFixed(2), label: 'Booked Rooms' }
    ];

    const size = {
        width: 500,
        height: 250,
    };
    return (
        <div>
            <div className='my-5 text-lg font-semibold'>
                <h1>Percentage of available rooms in the database : {percentageroom.toFixed(2)}</h1>
                <h1>Percentage of booked/rented/unavailable rooms in the database : {100 - percentageroom.toFixed(2)}</h1>
            </div>
            <PieChart
                series={[
                    {
                        arcLabel: (item) => ` (${item.value})`,
                        arcLabelMinAngle: 45,
                        data: value,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                    },
                }}
                {...size}
            >

            </PieChart>
        </div>
    );
};

export default Piechart;