import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewLoan from './components/ViewLoan.js';

const loan = { summary: 'Debt', description: 'loan', user: 'Name', loan: 'Loan ID', payment: 'Amount'};

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h2>Debt Feedom</h2>
        </div>
        <p className="App-intro">
           View your Debt Freedom items below.
           </p>
           <div className='Loan'>
              <ViewLoan loan={loan} />           
            </div>         
      </div>
    );
  }
}

export default App;
