import React, { useContext }  from 'react';
import C from "./C";
import {Name} from "./Index";


const B= ()=>{
	const name= useContext(Name);
	return (<><h1>Hello {name} from B</h1>	<C/></>);
}

export default B;