import "./search.css";
import CelularCard from "../CelularCard/CelularCard";
import imagen from '../../img-cp2/main-image-cp2.jpg'
import * as actions from "../../redux/actions/index";



import React, { Component } from "react";
import { connect } from "react-redux";

export class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownClase: "dropdown-content-search",
            ordenarpor: "MAS RELEVANTES",
            filtrarpor: [],
            numberpage: 1

        }
    }
    nextpage = () => {

        this.setState({ ...this.state, numberpage: this.state.numberpage + 1 })
        window.scrollTo({ top: 0, behavior: 'auto' })                   //la funcion scrollTo de windows me lllea a la parte superior y con de forma instantanea con behavior:auto
    }



    prevpage = () => {

        this.setState({ ...this.state, numberpage: this.state.numberpage - 1 })
        window.scrollTo({ top: 350, behavior: 'auto' })
    }

    dropdownSearch = () => {
        if (this.state.dropdownClase === "dropdown-content-search") { this.setState({ ...this.state, dropdownClase: "dropdown-content-search1" }) }
        else { this.setState({ ...this.state, dropdownClase: "dropdown-content-search" }) }
    }

    ordenarpor = (arg) => {
        this.setState({ ...this.state, ordenarpor: arg, dropdownClase: "dropdown-content-search" })

    }

    marcas = (arraycelulares) => {
        let array = []
        arraycelulares.map(char => array.push(char.marca))
        const arraySinDuplicados = array.filter((valor, indice) => {
            return array.indexOf(valor) === indice;
        });


        return arraySinDuplicados.map(mar => {
            return <label>
                <input type="checkbox" name="elemento1" />
                {mar}
            </label>
        })
    }

    colorcel = (arraycelulares) => {
        let array = []
        arraycelulares.map(char => array.push(char.color))
        const arraySinDuplicados = array.filter((valor, indice) => {
            return array.indexOf(valor) === indice;
        });

        console.log(arraySinDuplicados)
    }








    componentDidMount() {
        if (this.props.celulares && this.props.celulares.length === 0) {
            this.props.getAllCelulares()

        }
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

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



        return <div className="SearchConteiner">

            <div className="Search-filter">
                <table>
                    <tr>
                        <td>
                            ORDENAR POR:
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="dropdown-serch">
                                <select id="opcion" name="opcion" >
                                    <option value="opcion1">MAS RELEVANTES</option>
                                    <option value="opcion2">MENOR PRECIO</option>
                                    <option value="opcion3">MAYOR PRECIO</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td>
                            FILTRAR POR:
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            MARCA:
                        </td>
                    </tr>
                    <tr className="conteinercheckbox">
                        {this.props.celulares.length > 0 && this.marcas(this.props.celulares)}
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            ACCESORIOS:
                        </td>
                    </tr>
                    <tr>
                        <td className="conteinercheckbox">
                            <label>
                                <input type="checkbox" name="elemento1" />
                                Todos los accesorios
                            </label>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            PRECIO:
                        </td>
                    </tr>
                    <tr className="conteinercheckbox">
                        <label>
                            <input type="checkbox" name="elemento1" />
                            Hasta $20.000
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            $20.000 a $40.000
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            $40.000 a $60.000
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            $60.000 a $80.000
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            $80.000 a $100.000
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            Más de $100.000
                        </label>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            COLOR:
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="circle-color-conteiner">
                                {this.props.celulares.length > 0 && this.colorcel(this.props.celulares)}
                                <button className="circle-color-black"></button>
                                <button className="circle-color-turquoise"></button>
                                <button className="circle-color-blue"></button>
                                <button className="circle-color-grey"></button>
                                <button className="circle-color-skyblue"></button>
                                <button className="circle-color-pink"></button>
                            </div>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            MEMORIA:
                        </td>
                    </tr>
                    <tr className="conteinercheckbox">
                        <label>
                            <input type="checkbox" name="elemento1" />
                            16GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            32GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            64GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            128GB
                        </label>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            CAMARA:
                        </td>
                    </tr>
                    <tr className="conteinercheckbox">
                        <label>
                            <input type="checkbox" name="elemento1" />
                            Hasta 5 MP
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            5 MP a 20 MP
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            20 MP a 50 MP
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            50 MP a 70 MP
                        </label>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            MEMORIA RAM:
                        </td>
                    </tr>
                    <tr className="conteinercheckbox">
                        <label>
                            <input type="checkbox" name="elemento1" />
                            2GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            3GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            4GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            6GB
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            8GB
                        </label>
                    </tr>
                    <hr />
                    <tr>
                        <td className="Search-filter-text2">
                            PANTALLA:
                        </td>
                    </tr>
                    <tr className="conteinercheckbox">
                        <label>
                            <input type="checkbox" name="elemento1" />
                            5'' o menos
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            6''
                        </label>
                        <label>
                            <input type="checkbox" name="elemento1" />
                            Mas de 6''
                        </label>
                    </tr>
                    <hr />

                </table>
            </div>
            <div className="search-cards-pagination">
                <div className="Search-cards-conteiner">
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
            </div>



        </div >;
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);  //la funcion connect se encarga de que el componente reciba el estado "state", le pasamos las funciones con las que va a trabajar, la funcion connect las ejecut
