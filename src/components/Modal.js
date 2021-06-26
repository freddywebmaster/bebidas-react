import React from 'react';

const Modal = ({id, datos}) => {

    if(datos===undefined) return;
    const {strDrink, strAlcoholic, strInstructions, strDrinkThumb} = datos[0];

    return (
        <div id={id + "modal"} className="modal fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{strDrink}</h5>
                        <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4>Alcoholica: </h4><span>{strAlcoholic}</span>
                        <img className="img-responsive img-fluid" src={strDrinkThumb} alt={strDrink} />
                        <h4>Instrucciones: </h4><span>{strInstructions}</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;