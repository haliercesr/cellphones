/*5️⃣ ***COMPONENTE Home*** 5️⃣
Implementar el componente Home. Este deberá renderizar todos los celulars (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.
🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.
🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <celularCard />.
IMPORTANTE
❗Este componente debe ser de CLASE.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
 [Ej]: import * as actions from "./../../redux/actions/index";
*/
import "./home.css";
import CelularCard from "../CelularCard/CelularCard";
import imagen from '../../img-cp2/main-image-cp2.jpg'
import * as actions from "../../redux/actions/index";


import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.intervalo = null
    this.state = {
      numberpage: 1,
      prevSlide: 0,
      isPaused: false,
      animationClass: "slider-next",
      dotIndex: 0,
      sliderDb: ["https://moviles.info/wp-content/uploads/2021/01/Sony-Xperia-Pro.png.webp",
        "https://i.blogs.es/88476e/motorola-edge-s1/450_1000.jpeg",
        "https://moviles.info/wp-content/uploads/2020/12/HUAWEI-nova8-Pro.png.webp",
        "https://http2.mlstatic.com/D_NQ_NP_614407-MLA46088610404_052021-O.jpg",
        "https://moviles.info/wp-content/uploads/2019/08/samsung-galaxy-note-10-plus-02.png.webp"]
    }


  }

  nextpage = () => {

    this.setState({ ...this.state, numberpage: this.state.numberpage + 1 })
    window.scrollTo({ top: 350, behavior: 'auto' })                   //la funcion scrollTo de windows me lllea a la parte superior y con de forma instantanea con behavior:auto
  }



  prevpage = () => {

    this.setState({ ...this.state, numberpage: this.state.numberpage - 1 })
    window.scrollTo({ top: 350, behavior: 'auto' })
  }

  nextSlide = () => {
    this.setState({...this.state,prevSlide:(this.state.prevSlide+1) % this.state.sliderDb.length});
  };

  prevSlide = () => {
    this.setState({...this.state, prevSlide:this.state.prevSlide === 0 ? this.state.sliderDb.length - 1 : this.state.prevSlide - 1
  });
  };


  componentDidMount() {

    if (this.props.celulares && this.props.celulares.length === 0) {
      this.props.getAllCelulares()

    }
    //{




    //function pagination() {                
    // sliderDb.forEach((e, index) => {

    //     document.querySelector(".pagination").innerHTML += `<li><button class = "dot">${index}</button></li>`
    //   });
    // }

    // this.intervalo = setInterval(() => {
    //  if (!isPaused) {
    //    renderItem("next")
    //   }
    //  }, 5000);

    // pagination();
    // renderItem(null, 0);

    // const delay = () => setTimeout(function () { isPaused = false }, 6000);

    // document.querySelector(".next-item").addEventListener('click', function () {
    //   isPaused = true;
    //   renderItem("next");
    //   delay();
    //  });

    // document.querySelector(".prev-item").addEventListener('click', function () {
    //    isPaused = true;
    //  renderItem("prev");
    // delay();
    //});

    //document.querySelectorAll(".dot").forEach((e, dotIndex) => {
    // e.addEventListener("click", function (e) {
    // isPaused = true;
    //renderItem(null, dotIndex);
    // delay();
    // })
    //});
    //}




    //}
  }


  componentWillUnmount() {
    clearInterval(this.intervalo)
  }


  render() {

    function arraygroup(array1) {
      let group = []
      let k = 0
      for (let i = 0; array1.length > i; i) {
        i = i + 12
        group.push(array1.slice(k, i))
        k = k + 12
      }
      return group

    }



    return <div className="home">
      <section class="section">
        {<img src={this.state.sliderDb[this.state.prevSlide]} />}
          <div className="buttons-section">
            <button className="arrow-prev-item" onClick={this.prevSlide}>
              {"<"}
            </button>
            <button className="arrow-next-item" onClick={this.nextSlide}>
              {">"}
            </button>
            <div className="pagination-section">{this.state.sliderDb.map((e,index)=> {return <li><button class = "dot">${index}</button></li>})}</div>
          </div>
      </section>

      {this.props.celulares.length > 0 && (

        <div className="pagination-contenedor">
          <ul className="pagination-page">
            {this.state.numberpage > 1 && <li className="pagination-totalpage"><button onClick={this.prevpage}>Anterior</button></li>}
            <li className="pagination-page-number"><button>{this.state.numberpage}</button></li>
            <li className="pagination-page">de</li>
            <li className="pagination-totalpage"><button>{arraygroup(this.props.celulares).length}</button></li>
            {this.state.numberpage < arraygroup(this.props.celulares).length && <li className="pagination-totalpage"><button onClick={this.nextpage}>Siguiente</button></li>}
          </ul>
        </div>
      )}

      <div className="cards-conteiner">
        {this.props.celulares.length > 0 && arraygroup(this.props.celulares)[this.state.numberpage - 1].map((element) => {
          return <CelularCard
            key={element.id}
            id={element.id}
            marca={element.marca}
            precio={element.precio}
            imagen={element.imagen}
            modelo={element.modelo} />
        })
        }
      </div>

      {this.props.celulares.length > 0 && (

        <div className="pagination-contenedor">
          <ul className="pagination-page">
            {this.state.numberpage > 1 && <li className="pagination-totalpage"><button onClick={this.prevpage}>Anterior</button></li>}
            <li className="pagination-page-number"><button>{this.state.numberpage}</button></li>
            <li className="pagination-page">de</li>
            <li className="pagination-totalpage"><button>{arraygroup(this.props.celulares).length}</button></li>
            {this.state.numberpage < arraygroup(this.props.celulares).length && <li className="pagination-totalpage"><button onClick={this.nextpage}>Siguiente</button></li>}
          </ul>
        </div>
      )}


    </div>;
  }
}

export const mapStateToProps = (state) => {
  return {
    celulares: state.celulares
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllCelulares: () => { dispatch(actions.getAllCelulares()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);  //la funcion connect se encarga de que el componente reciba el estado "state", le pasamos las funciones con las que va a trabajar, la funcion connect las ejecut
