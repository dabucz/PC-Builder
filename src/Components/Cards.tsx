import CardDescription from './CardDescription';
import { CardsProps, ComponentType } from '../Utils/Props';
import ComponentTypes from '../Utils/ComponentTypes';

function Cards({ data, setFunc, selectVar, type, selectedData }: CardsProps) {
    const componentData = data[type] || {};
    const componentTypes: { [key: string]: ComponentType } = ComponentTypes(selectedData);

    return (
      <>
        {Object.keys(componentData).map((component) => {
          const info = componentData[component];
          return (
            <div
              key={component}
              onClick={() => {setFunc(component);}}
              className={`btn mx-2 w-[auto] bg-secondary shadow-lg rounded-lg overflow-hidden my-2 
                ${selectVar === component ? 'border-blue-500 border-2' : 'border-2 border-transparent'}
              `}
            >
              <div className={'flex flex-row'}>
                <div className="flex flex-row pr-10">
                  {componentTypes[type].icon(info.manufacturer) && (
                    <img loading={'lazy'} src={componentTypes[type].icon(info.manufacturer)} alt="Brand Logo" className="w-24 h-24" />
                  )}
                  <div className={'border-l-2 border-third flex ml-2 flex-col my-auto pl-2 h-full justify-center'}>
                    <p className="text-xl text-left">
                      {info.displayname}
                    </p>
                    <CardDescription info={info} type={type} selectedData={selectedData} data={data} />
                  </div>
                </div>
                <div className="ml-auto px-2 py-2 bg-secondary border-l-2 border-third flex justify-center">
                  <span className="text-lg font-semibold">${info.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
}

export default Cards;
