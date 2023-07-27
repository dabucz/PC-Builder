import {
  createBrowserRouter,
} from "react-router-dom";

import App from './Pages/MainPage';
import PCEditor from './Pages/PCEditor';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        id: "builder",
        path: "/builder",
        element: <PCEditor />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export function getRoutePathById(id: string) {
    const route = router.routes.find((route) => route.id === id) || null;
    return route ? route.path : null;
}  

function NotFound() {
  return <div className="justify-center text-5xl flex-col text-center m-0 bg-slate-800 text-white h-screen flex font-sans">404 - Page Not Found</div>;
};

export default router;