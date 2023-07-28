import { CardDescriptionProps } from "../Utils/Props"

function CardDescription({info, type, data, selectedData}: CardDescriptionProps) {
    return (
        <>
        {type.startsWith('cpu') || type.startsWith("gpu") && (
            <p className="mr-auto">TDP: {info.tdp}W</p>
        )}
        {type.startsWith('psu') && (
            <p className="mr-auto">{info.wattage} Watts</p>
        )}
        {type.startsWith('ram') || type.startsWith('gpu') || type.startsWith('storage') && (
            <p className="mr-auto">{info.gb}GB</p>
        )}
        {type.startsWith('cpu') || type.startsWith('motherboard') && (
            <p className="mr-auto">Socket: {info.socket}</p>
        )}
        {type.startsWith('cpu') &&
        data.motherboard[selectedData.selectedMB].socket != info.socket && (
            <p className="mr-auto text-red-500">Incompatible with motherboard</p>
        )}
        {type.startsWith('motherboard') &&
        data.cpu[selectedData.selectedCpu].socket != info.socket && (
            <p className="mr-auto text-red-500">Incompatible with cpu</p>
        )}
        {info.recommended && (
            <p className="mr-auto text-green-500">Recommended</p>
        )}
        </>
    )
}
export default CardDescription