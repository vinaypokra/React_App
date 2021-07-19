import React from 'react';
const calStyle = {
    textAlign : "center"
}
function Calc() {
    return <h1 style={calStyle}>Calculater</h1>;
}

const add =(a,b) => {
    return a+b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    
    return a * b;
}
function divi(a, b) {
    return (a/b).toFixed(2);
}

export default Calc;
export {add,sub,mul,divi};