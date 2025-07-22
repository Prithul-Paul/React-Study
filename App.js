import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));
const Header = () => {
    return (
        <div className="header">
            <div className="logo-section">
                <img src="https://marketplace.canva.com/EAGZJ2Na9V0/1/0/1600w/canva-red-and-orange-bold-fast-food-restaurant-animated-logo-0ujmrXVcncU.jpg" />
            </div>
            <div className="nav-section">
                <ul className="navlist">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResCard = () => {
    return (
    <div className="card-body">
        <div className="cardImge"><img src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" /></div>
        <div className="details">
            <h1 className="resName">KFC</h1>
            <h2 className="resName">Biriyani, North-South Indian</h2>
            <p className="rating">4.6 Stars</p>
            <span className="timing">38 mins.</span>
        </div>
    </div>)
}

const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard/>
                <ResCard/>
                {/* <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/> */}
            </div>
        </div>
    )
}



const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<App/>);