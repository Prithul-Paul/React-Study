import React from "react";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router';


import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";


const root = createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <About />
    }
])



root.render(<RouterProvider router={appRouter} />);