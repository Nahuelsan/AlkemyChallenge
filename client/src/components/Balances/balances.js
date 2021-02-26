import React, {useEffect, useState} from  'react';
import CardOperation from '../CardOperation/cardOperation';
import styles from './balances.module.css';
import api from '../../redux/action-creators.js';
import { useDispatch, useSelector } from 'react-redux';

/*
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los ingresos y
egresos de dinero cargados, y un listado de los últimos 10 registrados.
*/

const Balances = () =>{
    const dispatch = useDispatch()
    const [state, setState] = useState({
        operation: null
    })
    
    const operations = useSelector(state => state.operation)
    useEffect(() => {
        dispatch(api.getOperations)
    }, [])
    return(
        <div className={styles.container}>


        </div>
    )
}

export default Balances;