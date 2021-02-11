import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import NewRecipes from '../components/NewRecipes'

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/create" exact component={NewRecipes} />


    </Switch>
  </Router>
);