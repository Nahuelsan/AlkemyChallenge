import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//Estilos
import s from './abm.module.css';
//Componentes
import UpdateOperation from './UpdateOperation/updateOperation.js';
import CreateOperation from './CreateOperation/createOperation.js';


const ABM = () =>{
    const dispatch = useDispatch()
    const [state, setState] = useState({
        action: null,
        operation: {},
        operations: null
    })
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/operation`)
        .then(({data}) => setState(data))
    }, [])
    return(
        <>
            <div className={s.form}>
                <div>
                    {
                        state.action === null &&
                        <CreateOperation />
                    }
                    {
                        state.action === 'update' &&
                        <UpdateOperation className={s.controls} />
                    }
                </div>
            </div>
        </>
    )
}

export default ABM;
