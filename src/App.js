import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Transactions from './Containers/Transactions/Transactions'
import TransactionDetails from './Containers/TransactionDetails/TransactionDetails'
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <h1>All good!!!</h1>
     <Navbar/>
     
     <Switch>
     <Route path="/transaction/:type" component={Transactions}/>
     <Route path="/details/:balance" component={TransactionDetails}/>
     <Route path="/" component={Transactions}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
