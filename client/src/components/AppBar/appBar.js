import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
}));

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
    const [state, setState] = useState({
      show: false,
      balance: ''
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

