import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galery from "./pages/Galery";
import Shopping from "./pages/Shopping";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/contact"  component={Contact} />
                <Route path="/galery"  component={Galery} />
                <Route path="/shopping"  component={Shopping} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;