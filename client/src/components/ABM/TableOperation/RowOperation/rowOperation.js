import React from 'react';
import Deleted from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Build';
const RowOperation = ({s, operation, onUpdate, onDelete}) => {
    return (
        <tr>
            <td>{operation.concept}</td>
            <td className={s.description_td}>{operation.type}</td>
            <td>${operation.mount}</td>
            <td>{operation.date}</td>
            <td className={s.acciones_td}>
                <button href="#arriba" className={s.boton_modificar} onClick={() => onUpdate(operation.id)}>
                    <div className={s.container_edit}>
                        <Edit  fontSize="small" />
                    </div>
                </button>
            </td>
            <td className={s.acciones_td}>
                <button className={s.botonesDeleted} onClick={() => onDelete(operation.id)}>
                    <div className={s.container_delete}>
                        <Deleted color="secondary" fontSize="small" />
                    </div>
                </button>
            </td>
        </tr>
    )
}

export default RowOperation;