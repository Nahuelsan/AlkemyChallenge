import React, {useState, useEffect} from 'react';
import Balances from '../Balances/balances.js';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../redux/action-creators.js';
import ABM from '../ABM/abm.js';
const Home = () =>{
    const dispatch = useDispatch()
    const [state, setState] = useState([])
    const [abm, setAbm] = useState({
        show: false
    });
    const operations = useSelector(state => state.operations.sort(function (a, b) { 
        return convertDate(a.date) - convertDate(b.date); 
      }).reverse())

    useEffect(() => {
        if(!operations.length){
            dispatch(api.getOperations())
        }

    }, [])
    const onShow = () =>{
        setAbm({
            show: abm.show === true ? false : true
        })
    }
    function convertDate (dateString) {
        console.log(dateString)
        var dateSp = dateString.split("-");
        var anio = new Date().getFullYear();
        if (dateSp.length == 3) {
          anio = dateSp[2];
        }
        var mes = dateSp[1] - 1;
        var dia = dateSp[0];
      
        return new Date(anio, mes, dia);
    }
    return(
        <div>
            {
                abm.show && <ABM operations={state} onShow={onShow}/>
            }
            {
                
                !abm.show && <Balances operations={operations.slice(0,10)} onShow={onShow}/>
            }
            
        </div>
    )
}

export default Home;