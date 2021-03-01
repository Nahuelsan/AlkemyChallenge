import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';



export default function DenseAppBar() {
    const operations = useSelector((store) => store.operations);
    let balances = 0
    operations.forEach(operation => {
      if(operation.type === "Egresos"){
        balances = balances - operation.mount
      }else{
        balances = balances + operation.mount
      }
      
    });
    return (
        <AppBar position="static">
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
            Balance total $ {balances}
            </Typography>
        </Toolbar>
        </AppBar>
        
    );
  }

