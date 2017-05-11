import React from 'react';

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import ViewLoans from './Components/loans/ViewLoans';
import NewLoan from './Components/loans/NewLoan';
import {NotFound} from './Components/shared/Common';

export default () => (
    <Router>
     <Switch>
       <Route path='/'exact component={ViewLoans}/>
       <Route path='/NewLoan' component={NewLoan}/>
       <Redirect from='./ViewLoans' to='/'/>
       <Route component={NotFound} />
    </Switch>
   </Router> 
) 