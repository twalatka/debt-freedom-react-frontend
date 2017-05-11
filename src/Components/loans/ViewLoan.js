import React, {Component} from "react"; 
import Loan from './LoanFormat';
export default class NewLoan extends Component {
    constructor(props){
        super(props);
        this.state = {loans: []};
    }
   
   componentDidMount(){
       fetch('http://localhost:5000/loans/').then(response =>response.json())
       .then(loans => this.setState({loans}))
       .catch(console.error);
   }

    render(){
        return(
            <div>
            <div>
               {this.state.loans.map(loans => Loan(loans))}             
            </div>   
            </div>
      )
    }
}
