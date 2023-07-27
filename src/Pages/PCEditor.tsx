import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cursor from '../Utils/Cursor';
import withReactContent from 'sweetalert2-react-content'
const Swall = withReactContent(Swal)
import Cards from '../Components/Cards';
import LeftBar from '../Components/LeftBar';
import RightBar from '../Components/RightBar';
import PCNavbar from '../Components/PCNavbar';

import { Data } from '../Utils/Props';


function PCEditor() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const urlpage = searchParams.get('page');
    const [data, setdata] = useState<Data>({ cpu: {}, gpu: {}, ram: {}, psu: {}, storage: {}, case: {} });
    const [selection, setselection] = useState('cpu');
    const [curStat, setcurStat] = useState(true);

    const urlcpu = searchParams.get('cpu');
    const urlgpu = searchParams.get('gpu');
    const urlram = searchParams.get('ram');
    const urlmotherboard = searchParams.get('mb');
    const urlpsu = searchParams.get('psu');
    const urlstorage = searchParams.get('storage');
    const urlcase = searchParams.get('case');

    const [selectedCpu, setSelectedCpu] = useState(
        urlcpu != "" && urlcpu != null
        ? urlcpu
        : "7800X3D"
    );
    const [selectedGpu, setSelectedGpu] = useState(
        urlgpu != "" && urlgpu != null
        ? urlgpu
        : "4090"
    );
    const [selectedRam, setSelectedRam] = useState(
        urlram != "" && urlram != null
        ? urlram
        : "32-dominator"
    );
    const [selectedMB, setSelectedMB] = useState(
        urlmotherboard != "" && urlmotherboard != null
        ? urlmotherboard
        : "B650-AoursE-AX"
    );
    const [selectedPsu, setSelectedPsu] = useState(
        urlpsu != "" && urlpsu != null
        ? urlpsu
        : "rm1000x-shift"
    );

    const [selectedStorage, setSelectedStorage] = useState(
        urlstorage != "" && urlstorage != null
        ? urlstorage
        : "1tb-samsung980"
    );
    const [selectedCase, setSelectedCase] = useState(
        urlcase != "" && urlcase != null
        ? urlcase
        : "fractal7black"
    );
    useEffect(() => {
        fetchData();
        if (urlpage != null && urlpage != "") {
            setselection(urlpage);
        }
    }, 
    []);

    function fetchData() {
        fetch("http://dabu.cz:8801/api/getComponents")
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            return response.json();
          })
          .then((data) => setdata(data))
          .catch((error) => console.error('Error fetching data:', error));
      }

    const pageUrl = `/builder?cpu=${selectedCpu}&gpu=${selectedGpu}&ram=${selectedRam}&mb=${selectedMB}&psu=${selectedPsu}&storage=${selectedStorage}`
    function generateLink(){
        const link = window.location.origin + pageUrl;
        navigate(pageUrl);
        Swall.fire({
            title: 'Your Link',
            text: link,
            confirmButtonText: 'Cool'
        });
    }


    if (Object.keys(data.cpu).length === 0) {
        return (
            <div className="justify-center uppercase text-6xl text-center m-0 bg-primary text-white flex h-screen flex-col font-sans">
                Loading...
            </div>
        );
    }
    const totalPrice =
        data.cpu[selectedCpu].price +
        data.gpu[selectedGpu].price +
        data.ram[selectedRam].price +
        data.motherboard[selectedMB].price +
        data.psu[selectedPsu].price +
        data.storage[selectedStorage].price +
        data.case[selectedCase].price;

    const totalWattage =
        data.cpu[selectedCpu]?.tdp + data.gpu[selectedGpu]?.tdp;
    
    const selectedData = {
        'selectedCpu': selectedCpu,
        'selectedGpu': selectedGpu,
        'selectedRam': selectedRam,
        'selectedMB': selectedMB,
        'selectedPsu': selectedPsu,
        'selectedStorage': selectedStorage,
        'selectedCase': selectedCase,
    }
    return (
    <div className="overflow-scroll justify-center uppercase md:flex-row flex-col lg:items-start items-center text-center m-0 bg-primary text-white flex h-max font-sans">
        <LeftBar totalAmount={totalPrice} totalWattage={totalWattage} curStat={curStat} setcurStat={setcurStat} data={data} selectedData={selectedData} />
        <div className={`lg:w-1/2`}>
            <div className="mt-12 mb-4 justify-center flex flex-wrap">
                <PCNavbar selection={selection} setselection={setselection} />
                <div onClick={generateLink} className={'btn bg-green-500 rounded p-2'}>Generate Link</div>
            </div>
            <div className={'flex flex-col justify-center'}>
                <div>
                    {selection === 'cpu'
                    ? <Cards type="cpu" data={data} setFunc={setSelectedCpu} selectVar={selectedCpu} selectedData={selectedData}/>
                    : selection === 'gpu'
                    ? <Cards type="gpu" data={data} setFunc={setSelectedGpu} selectVar={selectedGpu} selectedData={selectedData}/>
                    : selection === 'psu'
                    ? <Cards type="psu" data={data} setFunc={setSelectedPsu} selectVar={selectedPsu} selectedData={selectedData}/>
                    : selection === 'ram'
                    ? <Cards type="ram" data={data} setFunc={setSelectedRam} selectVar={selectedRam} selectedData={selectedData}/>
                    : selection === 'motherboard'
                    ? <Cards type="motherboard" data={data} setFunc={setSelectedMB} selectVar={selectedMB} selectedData={selectedData}/>
                    : selection === 'storage'
                    ? <Cards type="storage" data={data} setFunc={setSelectedStorage} selectVar={selectedStorage} selectedData={selectedData}/>
                    : selection === 'case'
                    ? <Cards type="case" data={data} setFunc={setSelectedCase} selectVar={selectedCase} selectedData={selectedData}/>
                    : ''
                    }
                    </div>
            </div>
        </div>
        <div className={'lg:w-1/4 w-5/6'}>
            <RightBar data={data} selectedData={selectedData} />
        </div>
        <Cursor enabled={curStat}/>
    </div>
    );
}
export default PCEditor;
