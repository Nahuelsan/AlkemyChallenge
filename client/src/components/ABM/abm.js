import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

//Estilos
import s from './abm.module.css';

//Componentes
import UpdateOperation from './UpdateOperation/updateOperation.js';
import CreateOperation from './CreateOperation/createOperation.js';
import DeleteOperation from './DeleteOperation/deleteOperation.js';
import TableOperation from './TableOperation/tableOperation.js';
import api from '../../redux/action-creators.js';
import FilterBar from './FilterBar/FilterBar.js';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

const ABM = ({onShow}) =>{
    const [state, setState] = useState({
        action: null,
        operation: {},
        products: null,
    })
    const dispatch = useDispatch()
    const operations = useSelector(state => state.operations) 

    useEffect(() => {
        if(!operations.length){
            dispatch(api.getOperations())
        }
    }, [dispatch, operations])
    
    const onUpdate = (id) => {
        window.scroll(0,0)
        setState({
            ...state, 
            action: 'update', 
            operation: operations.find(operation => operation.id === id)
        })
    }
    const handleUpdate = (id, input) => {
        dispatch(api.updateOperation(id, {
            concept: input.concept,
            type: input.type,
            mount: input.mount,
            date: input.date
        }))
        setState({...state, action: null})
    }
    
    const onDelete = (id) => {
        window.scroll(0,0)
        setState({
            ...state, 
            action: 'delete', 
            operation: operations.find(operation => operation.id === id)
        })
    }
    
    const handleDetele= (id) =>{
        dispatch(api.deleteOperation(id))
        setState({...state, action: null})
    }
    const onNotSure = () =>{
        setState({...state, action: null})
    }
    //Filtrar
    const handleSelect = (type) => {
        if(type === ''){
            setState({...state, operations: null})
        }else{
            setState({
                ...state, 
                operations: operations.filter(operation => 
                    operation.type === type)
                })
        }


    }

    return(
        <>
            <Button onClick={() => onShow()}> 
                <HomeIcon color="primary" fontSize="large" onClick={() => onShow()}/>
            </Button>
            <div className={s.form}>
            
                <div>
                    {
                        state.action === null &&
                        <CreateOperation />
                    }
                    {
                        state.action === 'update' &&
                        <UpdateOperation className={s.controls} operation={state.operation} handleUpdate={handleUpdate} />
                    }
                    {
                        state.action === 'delete' &&
                        <DeleteOperation className={s.controls} operation={state.operation} handleDelete={handleDetele} onNotSure={onNotSure}  />
                    }
                </div>
                <FilterBar handleSelect={handleSelect}/>
                <div>
                    <TableOperation s={s} operations={state.operations || operations} onDelete={onDelete} onUpdate={onUpdate} />
                </div>
            </div>
        </>
    )
}

export default ABM;
