import React from 'react';
import s from './deleteOperation.module.css'

export default function DeleteOperation( { handleDelete, operation, onNotSure } ){
    return (
        <div className={s.container_deleteCategory}>
            <div className={s.container_h3}>
                <h3>Seguro que desea eliminar la operación?</h3>
            </div>
            <div className={s.container_buttons_yes_no}>
                <button className={s.botonesSi} onClick={()=>handleDelete(operation.id)}>Si</button>
                <button className={s.botonesNo} onClick={onNotSure} >No</button>
            </div>
        </div>
    )
}