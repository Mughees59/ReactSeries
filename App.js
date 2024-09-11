import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement(
//     "h1", { id: "heading" }, "Hello form React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// convert the below html code into React

{/* <div id="parent">
    <div id="child">
        <h1>
            "Heading inside the Div"
        </h1>
    </div>
</div> */}

const dv = React.createElement(

    "div", { id: "parent" }, React.createElement(
        "div", { id: "child" },
        [React.createElement(
            "h1", { id: "heading" }, "Heading s Div"
        ),
        React.createElement(
            "h1", { id: "heading1" }, "Heading Sibling"
        )]
    )

//     React.createElement(
//         "div", { id: "child1" },
//         [React.createElement(
//             "h1", { id: "heading" }, "Heading inside Div"
//         ),
//         React.createElement(
//             "h1", { id: "heading1" }, "Heading Sibling"
//         )]
//     )
// ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(dv);