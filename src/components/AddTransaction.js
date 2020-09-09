import React, {useState, useContext} from 'react';
import {v4 as uuid} from 'uuid';
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);
    
    const [income,setIncome] = useState({
        incomeText:"",
        incomeAmount: 0,
    });
    const [expense,setExpense] = useState({
        expenseText:"",
        expenseAmount: 0,
    });

    const [incomeCatagory,setIncomeCatagory] = useState('paycheck');
    const [expenseCatagory,setExpenseCatagory] = useState('bills');
   

const {incomeText, incomeAmount} = income;

    const onChangeIncome = e => {
        setIncome({...income,[e.target.name]: e.target.value});
        console.log(income);
        
    };
    const onChangeIncomeCatagory = e => {
        setIncomeCatagory(e.target.value);
        console.log(incomeCatagory);
    };

    const onSubmitIncome = e => {
        e.preventDefault();

        const newIncomeTransaction={
            id: uuid(),
            incomeText,
            incomeAmount: incomeAmount*1,
            incomeCatagory,
            
            
        };
        addIncome(newIncomeTransaction);
        
        setIncome({
            incomeText:'',
            incomeAmount:0,
            
        });
       
        
    };
    
    
    

    const {expenseText,expenseAmount} = expense;

    const onChangeExpense = e => {
        setExpense({...expense,[e.target.name]: e.target.value});
        console.log({expense});
    };
    const onChangeExpenseCatagory = e => {
        setExpenseCatagory(e.target.value);
        console.log(expenseCatagory);
    };

    const onSubmitExpense = e => {
        e.preventDefault();

        const newExpenseTransaction={
            id: uuid(),
            expenseText,
            expenseAmount: expenseAmount*1,
            expenseCatagory,
        };
        addExpense(newExpenseTransaction);

        setExpense({
            expenseText:"",
            expenseAmount:0
        });
         
    };
    
    

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">                    
                    <input type="text"
                           name="incomeText"
                           value={incomeText}
                           placeholder="Add Income..."
                           autoComplete="off" 
                           onChange={onChangeIncome}
                           required
                    />
                    <input type="number" name="incomeAmount" value={incomeAmount}  placeholder="Amount" autoComplete="off" onChange={onChangeIncome} required/> 
                    <select value={incomeCatagory} onChange={onChangeIncomeCatagory}>
                        <option value="paycheck">Paycheck</option>
                        <option value="bonus">Bonus</option>
                        <option value="investment">Investment</option>
                                
                    </select>                   
                    <input type="submit" value="Submit"  />
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text"  name="expenseText" value={expenseText} placeholder="Add Expense..." autoComplete="off" onChange={onChangeExpense} required />
                    <input type="number"  name="expenseAmount" value={expenseAmount} placeholder="Amount"  autoComplete="off" onChange={onChangeExpense} required />
                    <select value={expenseCatagory} onChange={onChangeExpenseCatagory}>
                        <option value="bills">Bills</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="groceries">Groceries</option>
                                
                    </select>                                      
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
