import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idReceta, guardarIdReceta] = useState(null);

    const [fullInfo, guardarFullInfo] = useState({0: 0});

    useEffect(()=>{
        const obtenerReceta = async () =>{
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const detalle = await axios.get(url);

            guardarFullInfo(detalle.data.drinks);
        }
        obtenerReceta();
    },[idReceta])

    return ( 
        <ModalContext.Provider
            value={{
                guardarIdReceta,
                fullInfo
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;