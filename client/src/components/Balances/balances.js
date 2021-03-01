import React from  'react';
import CardOperation from '../CardOperation/cardOperation';
import styles from './balances.module.css';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Button from '@material-ui/core/Button';

/*
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los ingresos y
egresos de dinero cargados, y un listado de los últimos 10 registrados.
*/

const Balances = ({operations, onShow}) =>{
    return(
        <div className={styles.container}>
            <Button onClick={() => onShow()}> 
            <BusinessCenterIcon color="primary" fontSize="large" onClick={() => onShow()}/>
            </Button>
        {
            
            operations.map(operation => 
                <CardOperation key={operation.id} operation={operation}/> 
            )
        }
        </div>
    )
}

export default Balances;