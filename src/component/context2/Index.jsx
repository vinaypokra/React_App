import React ,{ createContext } from "react";
import A from "./A";
const Name = createContext();

const Index = ()=>{
	return (<>
		<Name.Provider value={"Vinay"}>
		<A />
		<h1>Hello</h1>
		</Name.Provider>
			</>);
}

export default Index;
export {Name};