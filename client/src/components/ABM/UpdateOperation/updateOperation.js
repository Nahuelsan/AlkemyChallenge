import React, { useState } from 'react';
import s from './update.module.css';

export default function Updateoperation ({ operation, handleUpdate }) {
    const[input, setInput] = useState({
        concept: operation.concept,
        type: operation.type,
        mount: operation.mount,
        date: operation.date,
    })

    const onChange = ({target}) => {
        let newInput = {...input}
        newInput[target.name] = target.value
        setInput(newInput)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handleUpdate(operation.id, input)
    }

    return (
        <div name="arriba" className={s.container_form_updateProduct}>
            <h4>Editar operación</h4>
            <form onSubmit={onSubmit}>
                <div className={s.container_inputs_products}>
                    <input
                        className={s.controls}
                        type="text"
                        name="concept"
                        value={input.concept}
                        autoComplete="off"
                        onChange={onChange}
                        maxLength="100"
                        placeholder="Ingrese el concepto"
                        pattern="[A-Za-z0-9 ]{3,100}"
                        required />
                    <label>Concepto</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        className={s.controls}
                        type="number"
                        name="mount"
                        value={input.mount}
                        onChange={onChange}
                        pattern="[0-9]{1,10}"
                        placeholder="Ingrese el monto"
                        title="Only Numbers"
                        autoComplete="off"
                        step="0.01"
                        required />
                    <label>Ingrese el monto</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        className={s.controls}
                        name="date"
                        onChange={onChange}
                        value={input.date}
                        autoComplete="off"
                        title="Only Numbers"
                        placeholder="Ingrese la fecha"
                        required />
                    <label>Fecha</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        className={s.controls}
                        type="text"
                        value={input.type}
                        maxLength="200"
                        pattern="[A-Za-z0-9 ]{5,250}"
                        autoComplete="off"
                        placeholder="Ingrese la descripcion"
                        required 
                        readonly/>
                    <label>Tipo</label>
                </div>
                <div className={s.container_label_products}>
                </div>
                <input
                    className={s.input_submit}
                    type="submit"
                    value='Editar operationo' />
            </form>
        </div>
    );
}
