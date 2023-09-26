/*const heading = React.createElement("h1",
    { id: "heading" },
    "Hello from react!"); // heading is object
    console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render method is resposible to take this object and put it up means convert it into heading tag and put it up into DOM.
/**<div id="parent">
 *      <div id="child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * ReactElement(object)=>HTML(Browser Understands)
 */
import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{id:"parent"}, // we will be no longer using react.createElement
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am react hii h1 "),
React.createElement("h2",{},"I am h2 hii tag")]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")])]); //jsx is solution for this mess
console.log(parent); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// the tags inside root is getting replaced (not appended )by parent using render method 
//react can only be written inside jsx ? no, jsx will make our life easy when will make tags with react .the core react can be without jsx as well .