//var React = require('react');

// var ReactDom = require('react-dom');
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Fname = "vinay";
const Last = "pokra";
const img = "https://picsum.photos/200/300";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/300/300";

var time = new Date();
let date = time.getDate();
let month = time.getMonth() + 1;
let year = time.getFullYear();

const Dateis = `${date}/${month}/${year}`;
//time
let hou = time.getHours();
let p = "";
if (hou < 10) {
  hou = "0" + hou;
}
if (hou > 12) {
  hou = hou - 12;
  p = "PM";
}
else {
  p = "AM";
}
let min = time.getMinutes();
if (min < 10) {
  min = "0" + min;
}
let sec = time.getSeconds();
if (sec < 10) {
  sec = "0" + sec;
}
const Realtime = `${hou}:${min}:${sec} ${p}`;

//Inline CSS


const heading=
{
textAlign: 'center',
textTransform: 'capitalize',
fontWeight: 'bold',
textShadow: "0px 2px 4px #020101a6",
color: '#fa9191',
margin: '50px 0'
}


ReactDom.render(

  /*  <React.Fragment>
    <div>
      <h1>Helloo World</h1>
      <p>Vinay Pokra</p>
    </div>

    </React.Fragment> */
  <>
   
    <h1 style={{heading}} >Helloo World {Fname}</h1>
    <p>{`My Name is ${Fname} ${Last}`}</p>
    <p>{`Todays Data ${Dateis}  `}</p>
    <p>{`Current Time is ${Realtime} `}</p>
    <div className="img-box">
      <img src={img} alt="img" />
      <img src={img2} alt="img" />
      <img src={img1} alt="img" />
    </div>
   
  </>
  ,

  document.getElementById("root"),

  () => {
    console.log("App is running ");
  }

);
//100% java script no react 
/*   var h1 = document.createElement("h1");
  h1.innerHTML = "Vinay pokra";
  document.getElementById("root").appendChild(h1); */