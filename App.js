/**
 * div
 *    div
 *        H1
 *    div
 * div
 * 
 * */ 




const heading =React.createElement("div",
    {id:"parent:"}
    ,React.createElement("div",
        {},React.createElement("h1",
            {},"Hello from react")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

