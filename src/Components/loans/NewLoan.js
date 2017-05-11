import React, {Component} from 'react';

export default class NewLoan extends Component {
    constructor( props ){
        super (props);
        this.state = { item: {}, id: '1'};
    }

    createLoan = loan => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        fetch(`http://localhost:5000/Loans/`, {
            method: 'post',
            node: 'cors',
            body: JSON.stringify(loan),
            headers: myHeaders
        })
        .catch(err => console.error(err));
    }

    componentDidMount(){
    }

    handleSumbit = e => {
        e.preventDefault();
        let loan = {}
        loan.loanNum=this.state.loanNum;
        loan.user=this.state.user;
        loan.type=this.state.type;
        loan.prin=this.state.prin;
        loan.rate=this.state.rate;
        loan.pmt=this.state.pmt;
        loan.date=this.state.date;
        loan.mthsRem=this.state.mthsRem;
        this.createLoan(loan);
        }  
    

    render() {
        return (
            <div>
            <form onSubmit={this.handleSumbit} method='post' name='form'>
            <div>
            <label htmlFor='Loan_Type'>Loan Type</label>
            <input
              type='text'
              id='type'
              name='Loan_Type'
              onChange={ e => this.setState({ type: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor='Loan_Number'>Loan Number</label>
              <input
                type='text'
                id='loanNum'
                name='Loan_Number'
                onChange={ e => this.setState({ loanNum: e.target.value})}
                />
            </div>
            <div>
              <label htmlFor='Principal_Balance'>Principal Balance</label>
              <input
                type='number'
                id='prin'
                name='Principal_Balance'
                onChange={ e => this.setState({ prin: e.target.value})}
                />
            </div>
            <div>
             <label htmlFor='Interest_Rate'>Interest Rate</label>
             <input
               type='number'
               id='rate'
               name='Inerest_Rate'
               onChange={ e => this.setState({ rate: e.target.value})}
               />
            </div>
            <div>
             <label htmlFor='Payment_Amount'>Payment Amount</label>
             <input
               type='Number'
               id='pmt'
               name='Payment_Amount'
               onChange={ e => this.setState({ pmt: e.target.value})}
               />
            </div> 
            <div>
             <label htmlFor='Payment_Date'>Payment Date</label>
             <input
               type='Date'
               id='date'
               name='Payment_Date'
               onChange={ e => this.setState({ date: e.target.value})}
               />
             </div>
             <div>
               <label htmlFor='Months_Remaining'>Months Remaining</label>
               <input
                 type='Number'
                 id='mthsRem'
                 name='Months_Remaining'
                 onChange={ e => this.setState({ mthsRem: e.target.value})}
                 />
               </div>
               <div>
                <label htmlFor='Email'>Email Address</label>
                <input
                  type='email'
                  id='user'
                  name='Email'
                  onChange={ e => this.setState({ user: e.target.value})}
                  />
                </div>
                <div className='button'>
                 <button type='Submit'>Save</button>
                </div>
               </form>
           </div>
        )
    }
}