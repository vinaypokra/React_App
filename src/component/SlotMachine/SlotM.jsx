import React from 'react';

const SlotM = (props) => {
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    let {x,y,z} = props;
    if ((x===y)&&(y===z)) {
        return(
            <>
                <div className="maincontent">
                    <h1>{x}{y}{z}</h1>
                    <h1>This Is Matching</h1>
                </div>
            </>
        );
    }
    else
    {
        return (
            <>
                <div className="maincontent">
                    <h1>{x}{y}{z}</h1>
                    <h1>This Is Not Matching</h1>
                </div>
            </>
        );
    }
}
export default SlotM;