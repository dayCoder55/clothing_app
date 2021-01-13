import React from 'react';
import './App.css';
import   Homepage  from "./reuse-components/homepage.component";
import { Switch , Route } from 'react-router-dom';
import  ShopPage  from "./pages/shop/shop.component";
import { Header } from "./reuse-components/Header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
   <Switch>
     <Route exact path="/" component={Homepage}></Route>
     <Route  path="/hats" component={ShopPage}></Route>
   </Switch>
    </div>
  );
}

export default App;
