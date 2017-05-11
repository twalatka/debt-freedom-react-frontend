import React, {Component} from "react"; 
import Payment from './PaymentFormat';

export default class NewPayment extends Component {
    constructor(props){
        super(props);
        this.state = {payments: []};
    }
   
   componentDidMount(){
       fetch('http://localhost:5000/payments/').then(response =>response.json())
       .then(payments => this.setState({payments}))
       .catch(console.error);
   }

    render(){
        return(
            <div>
            <div>
               {this.state.payments.map(payments => Payment(payments))}             
            </div>   
            </div>
      )
    }
}
