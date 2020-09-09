import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Card, CardContent, Typography, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display:"flex",
      marginLeft: '10px',
      marginBottom: '10px',
      textAlign:"center",      
      justifyContent:"center"
    },
  });


const ExpenseTransaction = ({expenseTransaction}) => {
    const classes = useStyles();
    const {deleteTransaction} = useContext(GlobalContext)
    const handleClick = () => {
        deleteTransaction(expenseTransaction.id)
    }
    return (
            
                <Grid item component={Card} xs={6} md={3} className={classes.root}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            {expenseTransaction.expenseText.charAt(0).toUpperCase() + expenseTransaction.expenseText.slice(1)}
                        </Typography>
                        <Typography variant ="h6">
                            <span>${expenseTransaction.expenseAmount}</span>
                        </Typography>
                        
                        <Typography variant="body2">{expenseTransaction.expenseCatagory.charAt(0).toUpperCase() + expenseTransaction.expenseCatagory.slice(1)}</Typography>
                        <button className="delete-btn"
                             onClick={handleClick}>
                              <i className="fas fa-trash"></i>
                        </button>
                    </CardContent>
                </Grid>

        
);
};

export default ExpenseTransaction;
