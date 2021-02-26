import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/homepage/shop/shop.component";
import Header from "../src/components/header/header-component";
import SignInAndSignUp from "../src/pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/SignIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
