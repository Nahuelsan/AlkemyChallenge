import React, {useState} from 'react';
import s from './createOperation.module.css';

const CreateOperation = () =>{
    const [ input, setInput ]  = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        categories: []
    })

    const onChange = function (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setInput({
            name: '',
            description: '',
            price: '',
            stock: '',
            categories: []
        })
    }
    return(
        <div className={s.container_form_addProduct}>
            <h4>Agregar producto</h4>
            <form onSubmit={onSubmit}>
                <div className={s.container_inputs_products}>
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        onChange={onChange}
                        value={input.name}
                        maxLength="100"
                        placeholder="Ingrese el concepto"
                        pattern="[A-Za-z0-9 ]{5,100}"
                        required />
                    <label>Ingrese el concepto</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        type="text"
                        name="price"
                        onChange={onChange}
                        value={input.price}
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
                        type="text"
                        name="stock"
                        pattern="[0-9]{1,999}"
                        autoComplete="off"
                        title="Only Numbers"
                        onChange={onChange}
                        value={input.stock}
                        placeholder="Ingrese la fecha"
                        required />
                    <label>Ingrese la fecha</label>
                </div>
                <div className={s.container_inputs_products}>
                    <input
                        type="text"
                        onChange={onChange}
                        value={input.description}
                        name="description"
                        pattern="[A-Za-z0-9 ]{5,250}"
                        autoComplete="off"
                        placeholder="Seleccione el tipo"
                        required />
                    <label>Seleccione el tipo</label>
                </div>
                <input
                    className={s.input_submit}
                    type="submit"
                    value='Crear producto' />
            </form>
        </div>
    )
}

export default CreateOperation;