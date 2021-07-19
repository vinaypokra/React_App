import React from 'react';
import {Name} from "./Index";

const C= ()=>{
	return (<>
     <Name.Consumer>
     {
     	(name) =>{
     		return <h1>Hello {name} from C</h1>
     	}
     }
		
	</Name.Consumer></>);
}

export default C;