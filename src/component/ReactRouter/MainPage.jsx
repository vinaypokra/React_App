import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
import NavMenu from "./NavManu";
import PageLayouts from "./PageLayouts";
const MainPage = () => {
  return (
    <>
      {/* <BrowserRouter>
        <NavMenu />
        <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={Error} /> 
        </Switch>
      </BrowserRouter> */}
      <BrowserRouter>
        <NavMenu />
        <Switch>
          <Route exact path="/" render={() => <PageLayouts name="Home" />} />
          <Route
            path="/contact"
            render={() => <PageLayouts name="Contact" />}
          />
          <Route path="/about" render={() => <PageLayouts name="About" />} />
          <Route render={() => <PageLayouts name="Error 404" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default MainPage;
