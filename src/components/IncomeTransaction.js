import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalState';
import {Card, CardContent, Typography, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      marginLeft: '10px',
      marginBottom: '10px',
      textAlign:"center",  
      display:"flex",
      justifyContent:"center"
    },
  });

const IncomeTransaction = ({incomeTransaction}) => {
    const classes = useStyles();
    const {deleteTransaction} = useContext(GlobalContext)
    return (
    <Grid item component={Card} xs={6} md={3} className={classes.root} >
        <CardContent>
            <Typography color = "textSecondary" gutterBottom>
                {incomeTransaction.incomeText.charAt(0).toUpperCase() + incomeTransaction.incomeText.slice(1)}
             </Typography>
             <Typography variant ="h6">
                 <span>${incomeTransaction.incomeAmount}</span>
             </Typography>
             
             <Typography variant="body2">{incomeTransaction.incomeCatagory.charAt(0).toUpperCase() + incomeTransaction.incomeCatagory.slice(1)}</Typography>
                  <button className="delete-btn"
                       onClick={() => deleteTransaction(incomeTransaction.id)}>
                        <i className="fas fa-trash"></i>
                  </button>
        </CardContent>
    </Grid>

                
        
    );
};

export default IncomeTransaction;
