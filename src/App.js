import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Header from "./Components/Header/Header";
import Car from "./Components/Pages/Car";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Profile from "./Components/Pages/Profile";

const App = () => {

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Header />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/car" component={Car} />
            <Route path="/products/:search" component={Products} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
