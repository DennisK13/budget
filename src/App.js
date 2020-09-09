import React from 'react'
import "./App.css"
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'
import {GlobalContextProvider} from './context/GlobalState'
import Container from '@material-ui/core/Container';
const App = () => {
    return (
        <GlobalContextProvider>
            <div className="app">
        <Container maxWidth="sm">
            <div >
           <Header />
           <Balance />
           <AddTransaction />
           <IncomeList />
           <ExpenseList />
           
           
           
        
       
       
        </div>
        </Container>
        </div>
        </GlobalContextProvider>
    )
}

export default App;











