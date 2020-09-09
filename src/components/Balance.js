import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(incomeTransactions => incomeTransactions.incomeAmount);
    const expenseAmounts = expenseTransactions.map(expenseTransactions => expenseTransactions.expenseAmount);

    const totalIncome = incomeAmounts.reduce((acc,item) => (acc+=item),0);

    const totalExpense = expenseAmounts.reduce((acc,item) => (acc+=item),0).toFixed(2);

    const totalBalance = (totalIncome-totalExpense).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    
    return (
        <div className="balance">
            <h2>Your Balance</h2>
    <h3>${totalBalance}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Total Income:</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Total Expense:</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
