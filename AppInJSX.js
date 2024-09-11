import React from "react";
import ReactDOM from "react-dom/client"

// React Element

// Following pattern is (core of react) not the right way or you can say easy way to implemnt the element, there is another appraoch introduce by react developers
const reactElement = React.createElement("h1", { id: "heading" }, "Tutorial React ");



// The other way is using JSX React, JSX is Javascript syntax that makes easy to write the react elements. Visually it looks like that you are writing 
//html code but its not the html its JSX, JSX is differnt from html, JSX have html like syntax means it has similar syntax with html but both are different

const reactElementinJSX = <h1 id="heading">Heading in JSX</h1> // JS engine understands ECMAScript
// So this code isnt the JS code and over browser only understands JS code because it only run ECAMScripts, here parcel comes in the party it converts all the JSX code to make it understanable for JS Engine
// JSX( Transpiled before it reaches the JS Engine)

console.log(reactElement+ reactElementinJSX);

const reactroot = ReactDOM.createRoot(document.getElementById("root"));

reactroot.render(reactElementinJSX);
