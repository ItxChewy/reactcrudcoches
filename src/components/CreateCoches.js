import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateCoches extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status:false
    }

    generarCoche = (e) =>{
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value)
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = this.cajaImagen.current.value;
        console.log(imagen)
        let coche = {
            idCoche:id,
            marca:marca,
            modelo:modelo,
            conductor:conductor,
            imagen:imagen
        }
        let request = "api/coches/insertcoche"
        axios.post(Global.urlApi + request ,coche).then(response =>{
            this.setState({
                status:true
            })
        })

    }

  render() {
    return (
      <div style={{padding:"5%"}}>
        {
            this.state.status == true &&
            (<Navigate to={"/"}/>)
        }
        <h1>Create Coches</h1>
        <form className='form' onSubmit={this.generarCoche}>
            <label className="form-label">Id</label>
            <input className="form-control" ref={this.cajaId}></input>
            <label className="form-label">Marca</label>
            <input className="form-control" ref={this.cajaMarca}></input>
            <label className="form-label">Modelo</label>
            <input className="form-control" ref={this.cajaModelo}></input>
            <label className="form-label">Conductor</label>
            <input className="form-control" ref={this.cajaConductor}></input>
            <label className="form-label">Imagen</label>
            <input type="file" className="form-control" id="inputGroupFile01" ref={this.cajaImagen}></input>
            <hr></hr>
            <button className='btn btn-sm btn-primary'>Crear</button>
        </form>
      </div>
    )
  }
}
