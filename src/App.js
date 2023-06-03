import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import FirstHalfBody from "./Body";



const App=()=>{
    return(
        <>
        <Header/>
        
        <FirstHalfBody/>
        
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)