import React, { useState } from 'react';
import s from './FilterBar.module.css';
import SearchIcon from '@material-ui/icons/Search';

export default function FilterBar({ handleSearch, handleSelect }){
    const categories = ['Ingresos', 'Egresos']
    const [key, setKey] = useState("");
    const onSearch = (e)=>{
        if(key.length <= 2){
            return;
        }
        handleSearch(key);
        setKey('')
    }
    const onChange = (e)=>{
        setKey(e.target.value);
    }
    const onKeyEnter = e => {
        if(key.length <= 2){
            return;
        }
        if(e.keyCode === 13){
            onSearch()
        }
    }   
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