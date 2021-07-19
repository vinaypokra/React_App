import React from 'react';

const Clock =(props)=>{

    return(<>
        <h1 id={props.key} style={props.Watch} onMouseLeave={props.Change2} onMouseEnter={props.Change}>{props.Time} </h1>
        <br></br>
    </>)
}
export default Clock;