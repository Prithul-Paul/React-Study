/**
 * 
 * <div class="parent">
*      <div class="child1">
*           <h1>This is heading</h1>
            <p>This is paragraph</p>
*      </div>
        <div class="child2">
*           <h1>This is heading</h1>
            <p>This is paragraph</p>
*      </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */


// const heading = React.createElement("h1", 
// {
//     id: "heading", 
//     className: "heading", 
//     "data-heading": "h1"
// }, "Hello world from React!!");

const htmlTree = React.createElement("div",
    {
        className: "parent"
    },
    [
        React.createElement("div",
            {
                className: "child1"
            },
            [React.createElement("h1", {}, "This is heading"), React.createElement("p", {}, "This is paragraph")]
        ),
        React.createElement("div",
            {
                className: "child2"
            },
            [React.createElement("h1", {}, "This is heading"), React.createElement("p", {}, "This is paragraph")]
        ),
    ]
)

// console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(htmlTree);