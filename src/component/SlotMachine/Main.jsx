import React from 'react';
import SlotM from './SlotM';


const Main= ()=>{
    return(<>
        <h1 className="header">Slot Machine<span style={{color:"red"}}> Game</span></h1>
        
        <div>
           <hr/>
            <SlotM x="😊" y="😊" z="😊" />
            <hr/>
            <SlotM x="😊" y="👌" z="😊" />
            <hr />
            <SlotM x="😊" y="😊" z="😊"/>
            <hr />
        </div>
    </>);
}

export default Main;
