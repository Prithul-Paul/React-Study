import React from "react";
import {createRoot} from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";


const root = createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<App/>);