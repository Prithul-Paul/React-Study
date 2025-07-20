import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {
//     id: "heading", 
//     className: "heading", 
//     "data-heading": "h1"
// }, "Hello world from React!!");

// const htmlTree = React.createElement("div", {className: "parent"}, [
//         React.createElement("div", {className: "child1"},[
//         React.createElement("h1", {}, "This is heading"), 
//         React.createElement("p", {}, "This is paragraph")
//     ]),
//         React.createElement("div", {className: "child2"},[
//         React.createElement("h1", {}, "This is heading"), 
//         React.createElement("p", {}, "This is paragraph")
//     ]),
// ])

const Title = () => <h1>Hello world from React!!</h1>;

const Heading = () => {
    return (
        <div className="heading">
            {Title()}
            <h1>React functional component</h1>
        </div>
    )
}

// console.log(heading);
// console.log(headingjsx);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);