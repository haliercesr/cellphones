export default function Validate(nuevoCelular){
    let errors={ 
    marca: "",
    modelo: "",
    precio: "",
    descripción: "",
    sistemaOperativo: "",
    imagen: "",
    lanzamiento: ""}

    //imput marca
    if(nuevoCelular.marca.length>30) {errors.marca="Hasta 30 caracteres"}
    //modelo
    if(nuevoCelular.modelo.length>30) {errors.modelo="Hasta 30 caracteres"}
    //precio
    if(nuevoCelular.precio<0) {errors.precio="debe ser mayor a cero"}
   
    
    return errors}