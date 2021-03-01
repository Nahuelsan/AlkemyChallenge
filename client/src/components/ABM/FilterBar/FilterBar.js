import React from 'react';
import s from './FilterBar.module.css';

export default function FilterBar({ handleSearch, handleSelect }){

    const onSelect = ({target}) => {
        handleSelect(target.value);
    }
    return(
        <div className={s.container}>
            <select name="category" onChange={onSelect}>
                <option value="" selected>Filtar por tipo</option>
                <option value="Ingresos">Ingresos</option>
                <option value="Egresos">Egresos</option>
            </select>
        </div>
    );
}