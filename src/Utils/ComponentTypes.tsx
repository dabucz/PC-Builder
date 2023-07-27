import Images from './Images';
import { ComponentTypes } from './Props'

function ComponentTypes(selectedData: ComponentTypes) {
    return {
        cpu: {
            key: "cpu",
            icon: (manufacturer: string) => (manufacturer === 'amd' ? Images.Amd : Images.Intel),
            selected: selectedData.selectedCpu,
        },
        gpu: {
            key: "gpu",
            icon: (manufacturer: string) => (manufacturer === 'nvidia' ? Images.Nvidia : Images.Amd),
            selected: selectedData.selectedGpu,
        },
        ram:{
            key: "ram",
            icon: (manufacturer: string) => (manufacturer.endsWith('corsair') ? Images.DominatorRam : Images.Ram),
            selected: selectedData.selectedRam,
        },
        motherboard: {
            key: "motherboard",
            icon: () => (Images.Motherboard),
            selected: selectedData.selectedMB,
        },
        psu: {
            key: "psu",
            icon: (manufacturer: string) => (manufacturer === 'corsair' ? Images.CorsairPsu : Images.Psu),
            selected: selectedData.selectedPsu,
        },
        storage: {
            icon: () => Images.Storage,
            selected: selectedData.selectedStorage,
        },
        case: {
            key: "case",
            icon: (manufacturer: string) => (manufacturer === 'nzxt' ? Images.NZXTCase : manufacturer === 'fractal' ? Images.FractalCase : Images.Case),
            selected: selectedData.selectedCase,
        }
    }
}

export default ComponentTypes