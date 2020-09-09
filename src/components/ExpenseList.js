import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';
import {Grid} from '@material-ui/core';

const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext);
    console.log(expenseTransactions);
    return (
        <div className="transactions transactions-expense">
        <h2>Transaction History</h2>
        <Grid container spacing={2} >
        {expenseTransactions.map(expenseTransaction => (
           <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction} />
        ))}
        </Grid>    
      
        
    </div>
    )
}

export default ExpenseList
