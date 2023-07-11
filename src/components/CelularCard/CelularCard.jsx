/* 7️⃣ *** COMPONENTE CelularCard *** 7️⃣

Implementar el componente CelularCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un celular específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/


import "./celularCard.css";
import React from "react";
import { Link } from "react-router-dom";
import * as actions from '../../redux/actions/index'
import { connect } from "react-redux";


const CelularCard = (props) => {
  function deletes(){
    props.deleteCelular(props.id)
    console.log(props.celulares)
  }
  return <div className="card-conteiner">
            
           {/*<button onClick={deletes}>x</button>*/}
           <Link to={`/celulares/${props.id}`}>
           <img src={props.imagen[0]} alt={props.modelo}></img>
           <div className="card-details">
           <h3>{props.modelo}</h3>
           <p>Marca: {props.marca}</p>
           <h4>Precio: ${props.precio} USD</h4>
           </div>
           </Link>
  </div>;
};

export const mapStateToProps = (state) => {
  return {
    celulares: state.celulares                                 //traje el estado al componente para ver el estado global y si cambiaba
  }
};

export const mapDispatchToProps = (dispatch) => {
  return{
    deleteCelular:(id)=>{dispatch(actions.deleteCelular(id))}      // ESte era uno de mis problemas,tenes que pasarle un argumento a la funcion porque createCelular definida en el componente actions necesita un argumento
                                                                    //Otro problema es que en el "dispatch(createCelular(char)" la funcion createCelular tenia que ser importada como objet MODULE: import { createCelular } from "../../redux/actions/index"
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CelularCard)