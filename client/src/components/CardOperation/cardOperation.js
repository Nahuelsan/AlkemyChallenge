import React from 'react';
import style from './cardOperation.module.css';
import BrushIcon from '@material-ui/icons/Brush';
import ClearIcon from '@material-ui/icons/Clear';
const CardOperation = (props) =>{
    const {concept, date, mount, type} = props.operation
    return (
        <div className={style.card_container} onClick={() => console.log('Hola')}>
            <h2>{concept}</h2>
            <h4>${mount}</h4>
            <h4>{date}</h4>
            <h4>Tipo : {type}</h4>
{/*             <span className={style.show}>
                <BrushIcon color="primary" fontSize="large"/>
                <ClearIcon color="secondary" fontSize="large"/>
            </span> */}
        </div>
    )
}

export default CardOperation;