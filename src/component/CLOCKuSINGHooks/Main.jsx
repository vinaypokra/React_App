import React, { useState } from 'react';
import Clock from "./Clock";

const ClockStyle = {
    background : "orange",
    positon : "relative",
    height: "100vh"
};
const box={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}
const HClock = {
    
    color:"white",
    background:"black",
    padding : "20px 5px",
    letterSpacing: "10px",
    boxShadow:"0px 0px 12px 4px #3657a0",
    

};
const H2Clock = {
 
    color: "white",
    background: "black",
    padding: "25px 10px",
    letterSpacing: "10px",
    boxShadow: "0px 0px 12px 5px red",
    
    
}


const Main=()=>{
    
    const [Watch, setWatch] = useState(HClock);
    const Change = ()=>  setWatch(H2Clock);  
    const Change2 = () => setWatch(HClock);    



    let getTime = new Date().toLocaleTimeString();


    const [Time,setTime] = useState(getTime);

    const UpdateTime = ()=>
    {
        getTime = new Date().toLocaleTimeString(); 
        setTime(getTime);
    }

    setInterval(UpdateTime, 1000);

    return(<>
        <div style={ClockStyle} >
            <div style={box}>
               <Clock key={1} Watch={Watch} Change={Change} Change2={Change2} Time={Time}/>
                
            </div>
            
        </div>
    </>);
}

export default Main;