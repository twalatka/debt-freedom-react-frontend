import React, { Component } from 'react';
import './App.css';
import ViewLoan from './Components/loans/ViewLoan.js';
import NewLoan from './Components/loans/NewLoan.js';
import User from './Components/users/User.js';
import Payment from './Components/payments/Payment.js'

const loan = { loanNum: 'loan number', type: 'loan type', prin: 'principal balance', rate: 'interest rate', pmt: '5/15/17', date: 'payment date', mthsRem: 'how many months left to payoff', user: 'twalatka@yahoo.com'}
const payment = { };
const user = { userName: 'user name', Email: 'email'};
class App extends Component {


  getAllLoans(){
    fetch('http://localhost:5000/Loans/', {method: 'GET', node: 'cors'})
    .then(reponse => Response.json())
    .then(loans => {
      this.setState({loans});
    })
    .catch(err => console.log.error(err));
  }

  getNewLoan(){
    fetch('http://localhost:5000/Loans/', {method: 'GET', node: 'cors'})
    .then(response => Response.json())
    .then(loans => {
      this.setState({loans});
    })
  }

  render() {
    return (
       <div className="App">
        <div className="App-header">
        DEBT FREEDOM
        </div>
        <p className="App-intro">
          View Loan Information Below
        </p>
        <div className='User'>
           <User user={user}/>
        </div>   
        <div className='Loan'>
           <ViewLoan loan={loan}/>
        </div>
        <div className='Payment'>
           <Payment payment={payment}/>
         </div>
      </div>
    );
  }
}

  export default App;