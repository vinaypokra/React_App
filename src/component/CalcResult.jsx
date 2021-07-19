import React from 'react';
import Calc, { add, sub, mul, divi } from './Calc';

function CalcResult() {
    return (
        <>
            <Calc />
            <ol>
                <li>Addtion is {add(2, 2)}</li>
                <li>Substraction is {sub(5, 2)}</li>
                <li>Multipication is {mul(5, 2)}</li>
                <li>Division is {divi(10, 3)}</li>
            </ol>
        </>

    );
}

export default CalcResult;