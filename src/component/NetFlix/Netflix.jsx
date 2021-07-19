import React from 'react';
import Img from './Img';

const Netflix = (props) => {
return(
    <div className="cards">
        <div className="card">
            <Img img={props.imgsrc} />            
            
            <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.sname}</h3>
                <a href="http://localhost:3000/" target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
);
} ;

export default Netflix;