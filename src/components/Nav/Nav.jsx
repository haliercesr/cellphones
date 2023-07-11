/* 2️⃣ ***COMPONENTE NAV*** 2️⃣
Implementar el componente Nav. En este ejercicio tendrás que asociar dos etiquetas Link to='' a 
distintos elementos.

REQUISITOS
🟢 El primer <Link> debe dirigir a "/" con el texto "Home".
🟢 El segundo <Link> debe dirigir a "/celulares/create" con el texto "Create Celular".

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
*/

import "./nav.css";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css' //biblioteca icono para el boton de la lupa en nav-input
import React from "react";
import logo from '../../img-cp2/phone-logo.png'
import { useSelector } from "react-redux";

const Nav = () => {
  const Url = 'http://localhost:3000/'
  const Celulares = useSelector(state => state.celulares)

  function dropdown(marca) {
    const Celularesfiltro = Celulares.filter(cel => { return cel.marca === marca })
    return Celularesfiltro.map(char => {
      return (
        <Link to={`celulares/${char.id}`}>
          <a rel="noopener" target="_blank" >{char.modelo}</a>
        </Link>
      )
    })
  }


  return <div className="nav">
    <table>
      <tr>
        <td>
          <img src={logo} alt='logo' />
        </td>
        <td width="100" className="td-cell">
          <Link exact to='/'>Cellphones</Link>
        </td>
        <td>
        <div class="search">
  <div class="search-box">
    <div class="search-field">
      <input placeholder="Search..." class="input" type="text"/>
      <div class="search-box-icon">
        <button class="btn-icon-content">
          <i class="search-icon">
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div>
</td>
        <td>
          <Link to='/celulares/create'>
            Create Celular
          </Link>
        </td >
        <td colspan="2" width="60" className="shopping-cart">
          <button type="button">
            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
          </button>
        </td>
        <td>
          Carrito
        </td>
        <td colspan="2" width="60" className="shopping-cart">
          <button type="button">
            <i class="fa-solid fa-truck fa-xl"></i>
          </button>
        </td>
        <td>
          Seguí tu envío
        </td>
      </tr>
    </table>
    <table width="570">
      <tr>
        <td>
          <div className="dropdown">
            <button >Samsung
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={`/`}>
                <a rel="noopener" target="_blank" >Todos los modelos</a>
              </Link>
              {dropdown("Samsung")}
            </div>
          </div>

        </td>
        <td >
          <div className="dropdown">
            <button >Motorola
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={`/`}>
                <a rel="noopener" target="_blank" >Todos los modelos</a>
              </Link>
              {dropdown("Motorola")}
            </div>
          </div>
        </td>
        <td >
          <div className="dropdown">
            <button >LG
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={`/`}>
                <a rel="noopener" target="_blank" >Todos los modelos</a>
              </Link>
              {dropdown("LG")}
            </div>
          </div>
        </td>
        <td >
          <div className="dropdown">
            <button >Iphone
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={`/`}>
                <a rel="noopener" target="_blank" >Todos los modelos</a>
              </Link>
              {dropdown("iPhone")}
            </div>
          </div>
        </td>
        <td >
          <div className="dropdown">
            <button >Blu
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={`/`}>
                <a rel="noopener" target="_blank" >Todos los modelos</a>
              </Link>
              {dropdown("Blu")}
            </div>
          </div>
        </td>
        <td >
          <div className="dropdown">
            <button >Tablets
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={``}>
                <a rel="noopener" target="_blank" >Todos los modelos</a>
              </Link>
              {dropdown("Tablets")}
            </div>
          </div>
        </td>
        <td >
          <div className="dropdown">
            <button >Accesorios
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={``}>
                <a rel="noopener" target="_blank" >Todos los Accesorios</a>
              </Link>
              {dropdown("Accesorios")}
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>;
};

export default Nav;
