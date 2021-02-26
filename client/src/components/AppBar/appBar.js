import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../Menu/menu.js';
import styles from './appBar.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();
    const [state, setState] = useState({
      show: false
    });
    return (
        <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={() => setState({...state, show : !state.show ? true : false})}/>

            </IconButton>
            <Typography variant="h6" color="inherit">
            Balance total $0
            </Typography>
        </Toolbar>
        {
                state.show && <Menu className={styles.menu}/>
        }
        </AppBar>
        
    );
  }

