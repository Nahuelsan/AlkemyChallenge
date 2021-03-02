import React, {useState} from 'react';
import s from './createOperation.module.css';
import { useDispatch } from 'react-redux';
import api from '../../../redux/action-creators.js';
const CreateOperation = () =>{
    const dispatch = useDispatch()

    const [ input, setInput ]  = useState({
        concept: '',
        mount: '',
        date: '',
        type: '',
    })

    const onChange = function (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(api.createOperation(input))
        setInput({
            concept: '',
            mount: '',
            date: '',
            type: '',
        })
    }
    return(
        <div className={s.container_form_addProduct}>
            <h4>Agregar operación</h4>
            <form onSubmit={onSubmit}>
                <div className={s.container_inputs_products}>
                    <input
                        type="text"
                        name="concept"
                        autoComplete="off"
                        onChange={onChange}
                        value={input.concept}
                        maxLength="100"
                        placeholder="Ingrese el concepto"
                        pattern="[A-Za-z0-9 ]{5,100}"
                        required />
                    <label>Ingrese el concepto</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        type="text"
                        name="mount"
                        onChange={onChange}
                        value={input.mount}
                        pattern="[0-9,]{1,10}"
                        placeholder="Ingrese el monto"
                        title="Only Numbers"
                        autoComplete="off"
                        step="0.01"
                        required />
                    <label>Ingrese el monto</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        type="date"
                        name="date"
                        autoComplete="off"
                        title="Only Numbers"
                        onChange={onChange}
                        value={input.date}
                        placeholder="Ingrese la fecha"
                        pattern="\d{2}-\d{2}-\d{4}"
                        required />
                    <label>Ingrese la fecha</label>
                </div>
                <div className={s.container_inputs_products}>
                    <select
                        type="text"
                        onChange={onChange}
                        value={input.type}
                        name="type"
                        pattern="[A-Za-z0-9 ]{5,250}"
                        autoComplete="off"
                        placeholder="Seleccione el tipo"
                        required >
                            <option defaultValue="none">Seleccione el tipo</option>
                            <option value="Ingresos">Ingresos</option>
                            <option value="Egresos">Egresos</option>
                    </select>
                    <label>Seleccione el tipo</label>
                </div>
                <input
                    className={s.input_submit}
                    type="submit"
                    value='Crear operacion' />
            </form>
        </div>
    )
}

export default CreateOperation;