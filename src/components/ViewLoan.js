import React, {Component} from "react";

export default class ViewLoan extends Component {
  constructor( props ){
    super( props );
    this.state = { ...props.loan };
    console.log( this.state );
  }

  getLoanById(id){
    fetch('http://localhost:5000/Loans/${id}',  {method: 'GET' , mode: 'cors'})
    .then(response => response.json())
    .then(loans => {
      let loan = loans[0];
      this.setState({loan, id});
      console.log(this.state.loan);
    })
    .catch(err => console.log.error(err));
  }

  componentDidMount(){
    this.getLoanById(1);
  }

  render(){
    return (
      <div>
        <h1>{this.state.summary}</h1>
          <p>Details: <br />
           {this.state.loan.desription}</p>
          <p>User: {this.state.user.description}</p>
          <p>Loan: {this.state.loan}</p>
          <p>Payment: {this.state.loan.payment}</p>
     </div>
    )
  }
}
