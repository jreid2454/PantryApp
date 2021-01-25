import React from "react";
import {
    withRouter,
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
  import Header from "./Header"
  import Home from "./Home"
  import MealMaker from "./MealMaker"
  import ShoppingList from "./ShoppingList"
  import ThePantry from "./ThePantry"

  export default class TheRouter extends React.Component{
      constructor(){
          super()
      }

      render(){
          return(
              <div>
                  <Router>
                        <Header/>
                      <Switch>
                            <Route path="/home" exact component={Home} /> 
                            <Route path="/MealMaker" exact component={MealMaker} /> 
                            <Route path="/ShoppingList" exact component={ShoppingList} /> 
                            <Route path="/ThePantry" exact component={ThePantry} /> 
                      </Switch>
                  </Router>
              </div>
          )
      }
  }