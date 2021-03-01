import React from 'react';
import RowOperation from './RowOperation/rowOperation.js';
import { useDispatch, useSelector } from 'react-redux';


const TableOperation = ({s, onUpdate, onDelete, operations}) =>{
    return (
        <table name="arribas" className={s.product}>
        <thead>
          <tr>
            <th>Concepto</th>
            <th className={s.description_td}>Tipo</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {operations.length &&
            operations.map((operation) => <RowOperation key={operation.id} operation={operation} onUpdate={onUpdate} onDelete={onDelete} s={s}/>)
          }
        </tbody>
      </table>
    )
}

export default TableOperation;