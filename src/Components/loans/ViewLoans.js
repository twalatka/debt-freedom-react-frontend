import React, {Component} from 'react';
import ViewLoan from './ViewLoan.js';

export default class ViewLoans extends Component {
    constructor ( props ){
        super( props );
        this.state = { item: {} };
    }

    getAllLoans(){
        fetch(`http://localhost:5000/Loans/`, { method: 'GET', node: 'cors' })
        .then(response => response.json())
        .then(loans => {
            this.setState({loans});
            console.log(this.state.loans);
        })
        .catch(err => console.error(err));
    }

    componentDidMount(){
        this.getAllLoans();
    }

    render(){
        return (
            <div>
            <p>{this.state.loan.summary}</p>
            <ViewLoan loan={this.state.loan} />
            </div>
      )
    }
}