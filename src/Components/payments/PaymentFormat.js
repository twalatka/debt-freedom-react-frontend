import React from 'react';

export default payment =>(
   <h6>Payment: {payment.loanNum}, PmtNum: {payment.pmtNum}, PaymentDate: {payment.date}, PaymentAmount: {payment.totMthlyPmt}, IntRate: {payment.intRate},IntPaid: {payment.intPd}, PrincipalPaid: {payment.prinPd}, RemBal: {payment.remBal}</h6>
  
)