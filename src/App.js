import React from 'react';
import './App.css';
import Homepage from "./reuse-components/homepage.component";
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./reuse-components/Header/header.component";
import SignInandSignOut from "./pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component";
import { auth } from './fireBase/fireBase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribefromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log("ttttttt",user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={ShopPage} />
          <Route path='/signin' component={SignInandSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
