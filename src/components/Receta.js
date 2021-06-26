import React,{useContext} from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from './Modal';

const Receta = ({receta}) => {
    const {guardarIdReceta, fullInfo} = useContext(ModalContext);
    return ( 
        <div className="col-md-4 mb-3">
            <h4 className="card-header">{receta.strDrink}</h4>
            <img className="card-img-top" src={receta.strDrinkThumb} alt={receta.strDrink} />
            <div className="card-body">
                <button 
                    type="button"
                    className="btn btn-block btn-secondary"
                    data-toggle="modal"
                    data-target={"#" + receta.idDrink + "modal"}
                    onClick={()=>{
                        guardarIdReceta(receta.idDrink)
                    }}
                >
                    Ver Receta
                </button>
                {
                    (fullInfo === null | fullInfo=== undefined) ? null :
                    <Modal id={receta.idDrink} datos={fullInfo}/>
                }
            </div>
        </div>
     );
}
 
export default Receta;