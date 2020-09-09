import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';
import {Grid} from '@material-ui/core';

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext);
    console.log(incomeTransactions);
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <Grid container spacing={2} >
            {incomeTransactions.map(incomeTransaction => (
              <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
            ))}
            </Grid>       
        
            
            </div>
       
        
    )
}

export default IncomeList;
