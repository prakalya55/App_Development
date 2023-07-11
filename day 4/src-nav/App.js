import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Main from "./login/main";
import Appp from "./login/app";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/up" component={Main} />
          <Route path="/log" component={Appp} />
        </Switch>
      </Router>
    </div>
  );
}
