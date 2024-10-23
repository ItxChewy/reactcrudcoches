import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class HomeCoches extends Component {
    state = {
        coches:[]
    }

    loadCoches = () =>{
        let request = "api/coches"
        axios.get(Global.urlApi + request).then(response =>{
            this.setState({
                coches:response.data
                
            })
        })
    }

    componentDidMount = () =>{
        this.loadCoches();
    }

  render() {
    return (
      <div style={{padding:"5%"}}>
        <h1>Home Coches</h1>
        <table className="table table-bordered table-primary table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.coches.map((coche,index) =>{
                        return(
                            <tr key={index}>
                                <td>{coche.idCoche}</td>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen} style={{width:"60px" ,height:"60px"}}></img></td>
                                <td>
                                    <NavLink to={"/update/" + coche.idCoche}>
                                    <button className='btn btn-success btn-sm'>Actualizar</button>
                                    </NavLink>
                                
                                </td>
                                <td>
                                <NavLink to={"/delete/" + coche.idCoche}>
                                    <button className='btn btn-danger btn-sm'>Borrar</button>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
