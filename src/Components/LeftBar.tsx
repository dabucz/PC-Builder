import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LeftBarProps } from '../Utils/Props';
import RecommendedPsu from '../assets/RECOMMENDED_PSU_TABLE.pdf'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
const MySwal = withReactContent(Swal)
import React from 'react';


function LeftBar({totalAmount, totalWattage, curStat, setcurStat, data, selectedData}: LeftBarProps) {
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setcurStat(event.target.checked);
    };
    function OpenPDF() {
        MySwal.fire({
            title: <iframe className={'w-[29rem] h-[80rem]'} src={RecommendedPsu} />,
            didOpen: () => {
              // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            },
          }).then(() => {
          })
    }
    return (
        <div className="flex shadow-lg justify-center rounded h-[93vh] flex-col bg-secondary lg:w-1/4 w-5/6 m-6">
            <div className={'mt-4 mb-2 justify-center flex'}>
                <div className={'btn bg-green-500 p-1 text-base rounded shadow-lg mx-2'} onClick={OpenPDF}>See minimum psu requirements</div>
            </div>
            <div className={''}>
                <p>Your total wattage is: {totalWattage}</p>
                {
                data.motherboard[selectedData.selectedMB].socket != data.cpu[selectedData.selectedCpu].socket && (
                    <p className="mr-auto text-red-500 font-bold">CPU is Incompatible with motherboard</p>
                )}
            </div>
            <div className='flex flex-row mt-auto justify-center mb-5'>
                <div className={'w-48 h-48'}>
                    <CircularProgressbarWithChildren value={totalAmount} maxValue={4000}
                    styles={buildStyles({
                        pathColor: `rgb(59, 130, 246)`,
                        trailColor: '#fff',
                        backgroundColor: '#3e98c7',
                    })}>
                        <p className={'text-3xl text-blue-500'}>${totalAmount}</p>
                        <p>Total Price</p>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <div>
            <FormControlLabel
                control={
                <Switch
                    checked={curStat}
                    onChange={handleSwitchChange}
                    name="cursorSwitch"
                />
                }
                label="Custom cursor"
            />
            </div>
        </div>
    )
}

export default LeftBar;