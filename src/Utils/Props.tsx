// Update CardsProps interface to make properties optional
export interface CardsProps {
    data: Data;
    selectedData: {
        [key: string]: string;
    };
    setFunc: (component: string) => void;
    selectVar: string;
    type: 'cpu' | 'gpu' | 'psu' | 'ram' | 'motherboard' | 'storage' | 'case';
}

export interface CardDescriptionProps {
    info: {
        displayname: string;
        url: string;
        manufacturer: string;
        price: number;
        tdp?: number;
        wattage?: number;
        socket?: string;
        gb?: string;
        recommended?: boolean;
    };
    setFunc?: React.Dispatch<React.SetStateAction<string>>;
    selectVar?: string;
    type: string;
    data: Data;
    selectedData: {
        [key: string]: string,
    }
}


export interface RightBarProps {
    data: Data;
    selectedData: {
        [key: string]: string,
    }
}

export interface ComponentType {
    icon: (manufacturer: string) => string;
    selected: string;
}

export interface ComponentTypes {
    [key: string]: string;
}

export interface LeftBarProps {
    totalAmount: number;
    totalWattage: number;
    curStat: boolean;
    setcurStat: React.Dispatch<React.SetStateAction<boolean>>;
    selectedData: {
        [key: string]: string,
    }
    data: Data;
}

export interface Component {
    displayname: string;
    url: string;
    manufacturer: string;
    price: number;
    socket: string,
    gb: string;
    tdp: number
    type: string;
}
export interface Data {
    cpu: { [key: string]: Component };
    gpu: { [key: string]: Component };
    ram: { [key: string]: Component };
    psu: { [key: string]: Component };
    storage: { [key: string]: Component };
    case: { [key: string]: Component };
    [key: string]: { [key: string]: Component };
}
  