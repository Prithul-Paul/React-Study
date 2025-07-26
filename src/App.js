import React from "react";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';


import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const root = createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    },
    
])



root.render(<RouterProvider router={appRouter} />);