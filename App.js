 
import React from "react";
import ReactDOM from "react-dom/client";



const Jsxheading= ()=>(
<h2 id="heading">
    This is Jsx heading 
    </h2>
    );

//React Functional component

const HeadingComponent = ()=> (
    <div>
    < Jsxheading />
     <h1>
         Hi, I am React functional component 
         </h1>
         </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
const root2=ReactDOM.createRoot(document.getElementById("chandan"));

root.render(<Jsxheading />);
root2.render(< HeadingComponent />);

