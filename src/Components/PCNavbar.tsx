import {
    FaMicrochip,
    FaDisplay,
    FaMemory,
    FaBoltLightning,
    FaHardDrive,
    FaComputer,
} from "react-icons/fa6";

interface NavBarProps {
    selection: string;
    setselection: (value: string) => void;
}

const buttons = [
    {
        "id": "cpu",
        "displayname": "Processor",
        "icon": FaMicrochip,
    },
    {
        "id": "gpu",
        "displayname": "Graphics",
        "icon": FaDisplay,
    },
    {
        "id": "ram",
        "displayname": "Memory",
        "icon": FaMemory,
    },
    {
        "id": "motherboard",
        "displayname": "Motherboard",
        "icon": FaMicrochip,
    },
    {
        "id": "psu",
        "displayname": "Power Supply",
        "icon": FaBoltLightning,
    },
    {
        "id": "storage",
        "displayname": "Storage",
        "icon": FaHardDrive,
    },
    {
        "id": "case",
        "displayname": "Case",
        "icon": FaComputer,
    },
]

function Navbar({selection, setselection}: NavBarProps) {
    return (
    <div className={'flex flex-row justify-center flex-wrap'}>
        {buttons.map((button) => (
        <div
            key={button.id}
            onClick={() => setselection(button.id)}
            className={`btn rounded p-2 m-2 ${selection === button.id ? "bg-blue-500" : "bg-secondary"}`}
        >
            <span className="flex items-center">
                {button.icon && (
                <button.icon style={{ marginRight: "4px" }} />
                )}
                {button.displayname}
            </span>
        </div>
        ))}
    </div>
    )
}

export default Navbar