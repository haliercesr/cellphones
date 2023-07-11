/* 8️⃣ ***COMPONENTE CelularDetail*** 8️⃣

Implementar el componente CelularDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del celular.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del celular cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del celular correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗Recuerda que las peticiones asíncronas a los servidores suelen demorar. Debes checkear tener disponible la información a utlizar.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import "./celularDetail.css";
import * as actions from "../../redux/actions/index"
import { useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";    //este es otro de mis muchos errores que me llevaron tiempo corregir este es un componente de funcion, tenia que usar usedispatch(es un hook que reemplsa a la funcion matchdispatchtoprops) y useselector(remplaza a la funcion matchstatetoprops) 
import { useState } from "react";
// LAS FUNCIONES MATCHDISPATCHTOPROPS Y MATCHSTATETOPTOPS Y CONNECT SON VIEJAS Y SE USAN MUCHO EN COMPONENTES DE CLASE Y ES BUENO CONOCERLAS PORQUE AUNQUE YA SE USEN LOS HOOKS PODEMOS ENCONTRARNOS CON ELLAS

const CelularDetail = (props) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const celularDetail = useSelector(state => state.celularDetail) // reemplaza a la funcion connect para traer los estados globales
  const imagenes = celularDetail.imagen
  React.useEffect(() => {

    dispatch(actions.getCelularDetails(id));
    dispatch(actions.getAllCelulares())


  }, [id])

  const [item, setItem] = useState(0);
  const [celular,setCelular]=useState(1);


  const nextSlide = () => {
    setItem((prevSlide) => (prevSlide + 1) % imagenes.length);
  };

  const prevSlide = () => {
    setItem((prevSlide) =>
      prevSlide === 0 ? imagenes.length - 1 : prevSlide - 1
    );
  };

function handleshop(e){
setCelular(e.target.value)
}


  function detail() {
    if (celularDetail) {   //despues de muchos intentos, tuve que verificar que celulardetail exista (para que el useeffect no me dire undefined)

      return <div className="Detailright">
        <h1>{celularDetail.modelo}</h1>
        <h3>Precio: ${celularDetail.precio} USD</h3>
        <h5>Marca: {celularDetail.marca}</h5>
        <h5>Lanzamiento: {celularDetail.lanzamiento}</h5>
        <h5>Sistema Operativo: {celularDetail.sistemaOperativo}</h5>
        <h5>Descripción: {celularDetail.descripción}</h5>
        <p>10 unidades en stock</p>
        <label for="quantity">Cantidad:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10" onChange={handleshop} placeholder="1"></input>
        <button  >Comprar({celular}) </button>
        <button>Agregar al carrito</button>
      </div>
    }
  }

  function handleImageClick(index){
    setItem(index)
  }


  return <div className="detail">
    <div className="detail-flex">
      <div className="detailleft">
        <div className="section-menu-image">
        {celularDetail.imagen && celularDetail.imagen.map((imagen, index) => (
          <div className="section-menu-image1">
          <img
            key={index}
            src={imagen}
            alt={`Celular ${index}`}
            className={celularDetail.imagen[item] === imagen ? "-active" : ""}
            onClick={() => handleImageClick(index)}
          />
          </div>
        ))}
      </div>
        
        <div className="slide-container-detail">
          <div className="buttons">
            <button className="arrow-left" onClick={prevSlide}>
              {"<"}
            </button>
            <button className="arrow-right" onClick={nextSlide}>
              {">"}
            </button>
          </div>
          {celularDetail.imagen && <img src={celularDetail.imagen[item]} />}

        </div>

      </div>
      {detail()}
    </div>
  </div>;
};

export default CelularDetail
