import React from 'react';
import Netflix from './Netflix';
import Listseris from './List';

const newlist = Listseris.map((newvalue)=>{
    return <Netflix key={newvalue.key} imgsrc={newvalue.imgsrc} title={newvalue.title} sname={newvalue.sname} />;
});



const Netapp =()=>{
    return (
        <>
            <div className="header">
                <h1>List Of Top6 Series</h1>
            </div>

            <div className="maincontent">{newlist}{newlist}</div>
        </>
    );
};
export default Netapp;