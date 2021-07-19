import React from 'react';

const Img = (props)=>{
  return(
      <img src={props.img} alt="mypic" className="card_img" />
  );
};

export default Img;