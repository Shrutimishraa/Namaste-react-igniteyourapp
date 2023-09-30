import React from "react";
import ReactDOM  from "react-dom/client";
//React.createlement => ReacrElement => Js object => Htmlelement(render)-Won't using this ever
const heading = React.createElement("h1",
{id:"heading"},"Namaste React from react ");
console.log(heading);

//JSX-HTML-LIKE OR XML LIKE SYNTAX
//JSX(transpiled before it reaches the JS)-Parcel-Babel(opensource online JS compiler)
//JSX=>REact.createElement=>ReactElement-JS Object=>HTMLElemnt(render)
const jsxHeading = <h1 id="heading">Nmaste react using JSX</h1>;
//to give attribute in JSX use camelcase-explore all the tags,attributes
console.log(jsxHeading);
//functional component -return react element
const HeadingComponent1=()=>{
    return <h1> Namaste react functional component1</h1>;
};
//component inside component-known as component composition
const number = 1000;
const HeadingComponent2=()=>(
    <div id="container">
        <HeadingComponent1 />
        {HeadingComponent1()}
       <h2>{number}</h2> {number}
       <h3>{100+200}</h3> 
       <h4>{console.log("we can write js in jsx by using curly braces")}</h4>
       <h1 className="heading"> Namaste react functional component2</h1>
    </div>
);
const fn1=()=>true;
const fn2=()=>{return true;};
const root =ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent2/>);
