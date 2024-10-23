import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class UpdateCoches extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false,
        coche:[]
    }

    loadCoche = () => {
        let id = this.props.id
        let request = "api/coches/findcoche/" + id
        axios.get(Global.urlApi + request).then(response =>
            this.setState({
                coche:response.data
            })
        )
    }
    actualizarCoche = (e) =>{
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value)
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = this.cajaImagen.current.value;
        let coche = {
            idCoche:id,
            marca:marca,
            modelo:modelo,
            conductor:conductor,
            imagen:imagen
        }
        let request = "api/coches/updatecoche"
        axios.put(Global.urlApi + request ,coche).then(response =>{
            this.setState({
                status:true
            })
        })

    }

    componentDidMount = () => {
        this.loadCoche()
    }

    render() {
        return (
            <div>
                <h1>Update Coches</h1>
                {
                    this.state.status == true &&
                    (<Navigate to={"/"}/>)
                }
                <form className='form' onSubmit={this.actualizarCoche}>
                    <label className="form-label">Id</label>
                    <input className="form-control" ref={this.cajaId} defaultValue={this.state.coche.idCoche} disabled></input>
                    <label className="form-label">Marca</label>
                    <input className="form-control" ref={this.cajaMarca} defaultValue={this.state.coche.marca}></input>
                    <label className="form-label">Modelo</label>
                    <input className="form-control" ref={this.cajaModelo} defaultValue={this.state.coche.modelo}></input>
                    <label className="form-label">Conductor</label>
                    <input className="form-control" ref={this.cajaConductor} defaultValue={this.state.coche.conductor}></input>
                    <label className="form-label">Imagen</label>
                    <input type="file" class="form-control" id="inputGroupFile01" ref={this.cajaImagen} defaultValue={this.state.coche.imagen}></input>
                    <hr></hr>
                    <button className='btn btn-sm btn-primary'>Actualizar</button>
                </form>
            </div>
        )
    }
}
