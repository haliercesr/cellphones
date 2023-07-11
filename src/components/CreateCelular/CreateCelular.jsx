/* 6️⃣ ***COMPONENTE CreateCelular*** 6️⃣
Implementar el componente CreateCelular. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.
IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/
import { createCelular } from "../../redux/actions/index"
import * as actions from "../../redux/actions"
import React, { useState } from "react";
import { connect } from "react-redux"
import Validate from "./validations"
import { useSelector, useDispatch } from "react-redux";


const CreateCelular = (props) => {

  const celulares=useSelector(state=>state.celulares)    //lo use para monitorear el estdo, lo cambien en ves de usar matchstatetoprops y connect porque no me pasaba el test
  const dispatch = useDispatch()
  const[nuevoCelular,setnuevoCelular]=React.useState({
    marca: "",
    modelo: "",
    precio: 0,
    descripción: "",
    sistemaOperativo: "",
    imagen: "",
    lanzamiento: "",
  })
  const [errors,setErrors]=React.useState({})

  

  function handleinput(e){
  ;
  var value=e.target.value;
  var namen=e.target.name;
  setnuevoCelular({...nuevoCelular,[namen]:value})
  setErrors(Validate({...nuevoCelular,[namen]:value}))
  }

  function handleFormSubmit(e){
    e.preventDefault()
    if (errors.marca==="" && errors.modelo==="" && errors.precio==="" ){
    dispatch(actions.createCelular(nuevoCelular))           //ESte era otro grande problema,cuando invoco a la funcion como actions.createCelular o createCelular no actualiza el estado global pero cuando lo pongo como props.createCelular si funciona     
   console.log(celulares)}         //el problema era que estaba importano mal la accion, tiene que ser asi: import { createCelular } from "../../redux/actions/index";
                                        //luego de importar la accion tengo que hacer el dispatch para poder usar la accion en mi componente, hago el dispatch con: createCelular 
                                        //luego puedo usar la accion como props.createCelular
  }

  return <div>

<form>
      <label>Marca: </label>
      <input type="text" name="marca" onChange={handleinput}></input>
      <p>{errors.marca}</p>
      <label>Modelo: </label>
      <input type="text" name="modelo" onChange={handleinput}></input>
      <p>{errors.modelo}</p>
      <label>Precio: </label>
      <input type="number" name="precio" onChange={handleinput}></input>
      <p>{errors.precio}</p>
      <label>Descripción: </label>
      <textarea name="descripción" onChange={handleinput}></textarea>
      <label>Sistema Operativo: </label>
      <input type="text" name="sistemaOperativo" onChange={handleinput}></input>
      <label>Imagen: </label>
      <input type="text" name="imagen" onChange={handleinput}></input>
      <label>Lanzamiento: </label>
      <input type="text" name="lanzamiento" onChange={handleinput}></input>
      <button type="submit" onClick={handleFormSubmit}>Crear Celular</button>
    </form>

  </div>;
};



export default CreateCelular;
