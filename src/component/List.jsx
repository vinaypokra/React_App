import React from 'react';
import Name ,{last,newname}from './Name';

function  List() {
    return(
        <ol>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Four</li>
            <li>{Name}</li>
            <li>{last}</li> 
            <li>{newname}</li>
        </ol>
    );
}
export default List;