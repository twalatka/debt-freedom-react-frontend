import React, {Component} from "react"; 
import User from './UserFormat';

export default class NewUser extends Component {
    constructor(props){
        super(props);
        this.state = {users: []};
    }
   
   componentDidMount(){
       fetch('http://localhost:5000/loans/').then(response =>response.json())
       .then(users => this.setState({users}))
       .catch(console.error);
   }

    render(){
        return(
            <div>
            <div>
               {this.state.users.map(users => User(users))}             
            </div>   
            </div>
      )
    }
}
