// import React from "react";
import React, { Fragment,  useEffect } from 'react';
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Header";
import CreateYourAccount from "./CreateYourAccount";
import Carouselcontainer from './component/Carouselcontainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/CreateAccount">
            <CreateYourAccount />
          </Route>
          <Route Path="/">
            <Fragment>
              <Navbar />
              </Fragment>
              <Carouselcontainer />
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
