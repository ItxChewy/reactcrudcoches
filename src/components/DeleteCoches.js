import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class DeleteCoche extends Component {
  state ={
    status:false
  }

  eliminarCoche = (e) =>{
    e.preventDefault();
    let request = "api/Coches/deletecoche/" + this.props.id
    axios.delete(Global.urlApi + request).then(response =>{
      this.setState({
        status:true
      })
    })
  }

  render() {
    return (
      <div style={{padding:"5%" ,textAlign:"center"}}>
        <h1>Delete Coche</h1>
        {
          this.state.status == true &&
          (
            <Navigate to={"/"}/>
          )
        }
        <h2>Vas a eliminar el coche con id : {this.props.id}</h2>
        <button className='btn btn-danger' onClick={this.eliminarCoche}>Eliminar</button>
      </div>
    )
  }
}
