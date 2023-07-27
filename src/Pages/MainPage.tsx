import { useNavigate } from "react-router-dom";
import Cursor from '../Utils/Cursor';
import { getRoutePathById } from '../router'
function App() {
  const navigate = useNavigate();
  const builder_url = getRoutePathById("builder");
  const handleCpuOptionChange = () => {
    if (builder_url) { navigate(builder_url); }
  };
  return (
    <>
      <div className="flex-col text-center m-0 bg-primary text-white h-screen flex font-sans">
        <div className="mt-4 flex flex-col">
          <span className="text-4xl">Simple pc part picker</span>
        </div>
        <div className="mt-4 flex justify-center flex-col">
          <div className="flex justify-center">
            <div
              onClick={handleCpuOptionChange}
              className={`bg-green-500 text-4xl btn cursor-pointer bg-no-repeat bg-cover h-12 w-96 rounded shadow-lg m-4`}
            >Start building</div>
          </div>
        </div>
        <Cursor enabled={true} />
      </div>
    </>
  );
}


export default App;
