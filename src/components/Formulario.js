import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriaContext';
import {RecetasContext} from '../context/RecetasContext'

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);

    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext)
    
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const obtenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form className="col-md-12"
            onSubmit={e => {
                e.preventDefault();
                if(busqueda.categoria.trim() === '' | busqueda.nombre.trim() ==='') return(alert('Escriba Algo o Seleccione Categoria'));
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categorias o ingredientes</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar Por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                    
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option className="text-dark" value="">--Selecciona Categoria--</option>
                        {
                            categorias.map(categoria =>(
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                    className="text-dark"
                                >
                                    {categoria.strCategory}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-block btn-secondary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;