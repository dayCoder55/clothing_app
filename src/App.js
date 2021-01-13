import React from 'react';
import './App.css';
import   Homepage  from "./reuse-components/homepage.component";
import { Switch , Route } from 'react-router-dom';

export const Hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path="/" component={Homepage}></Route>
     <Route  path="/hats" component={Hats}></Route>
   </Switch>
    </div>
  );
}

export default App;
