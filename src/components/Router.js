import React, { Component } from 'react'
import { BrowserRouter, Routes,Route, useParams } from 'react-router-dom'
import HomeCoches from './HomeCoches'
import MenuCoches from './MenuCoches'
import CreateCoches from './CreateCoches'
import UpdateCoches from './UpdateCoches'
import DeleteCoches from './DeleteCoches'

export default class Router extends Component {
  render() {
    function UpdateCochesElement(){
        let {id} = useParams();
        return(<UpdateCoches id={id}/> )
    }
    function DeleteCochesElement(){
        let {id} = useParams();
        return(<DeleteCoches id={id}/> )
    }

    return (
      <BrowserRouter>
      <MenuCoches/>
        <Routes>
            <Route path='/' element={<HomeCoches/>}/>
            <Route path='/create' element={<CreateCoches/>} />
            <Route path='/update/:id' element={<UpdateCochesElement/>} />
            <Route path='/delete/:id' element={<DeleteCochesElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
