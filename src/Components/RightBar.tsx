import { RightBarProps, ComponentType } from '../Utils/Props';
import ComponentTypes from '../Utils/ComponentTypes';
function RightBar({ data, selectedData }: RightBarProps) {
    const redirect = (url: string) => {
      window.open(url, '_blank');
    };
    const componentTypes: { [key: string]: ComponentType } = ComponentTypes(selectedData);
  
    return (
        <>
            <div className='flex h-[93vh] rounded flex-col m-6'>
            <div className={'text-5xl shadow-lg'}>Your Build</div>
            {Object.keys(componentTypes).map((component) => {
                const componentData = data[component][componentTypes[component].selected];
                const componentInfo = componentTypes[component];

    
                // Check if componentData exists and has the 'manufacturer' property
                if (!componentData || !componentData.manufacturer) {
                    return null;
                }
    
                return (
                <div
                    key={`${component}`}
                    onClick={() => redirect(componentData.url)}
                    className="btn p-0 my-2 bg-secondary rounded-lg flex flex-row shadow-lg justify-center"
                >
                    <img src={componentInfo.icon(componentData.manufacturer)} alt="Brand Logo" className={'h-16 w-16 rounded-lg m-2 p-1 bg-white'} />
                    <div className='my-auto'>
                    <div className="text-base ml-2 text-left font-bold">{component}</div>
                    <div className="ml-2 text-left text-sm">{componentData.displayname}</div>
                    </div>
                    <div className="mt-auto ml-auto text-base mr-1">
                    {componentInfo.selected === null ? '$?' : ` $${componentData.price}`}
                    </div>
                </div>
                );
            })}
            </div>
        </>
    );
}
  
export default RightBar;