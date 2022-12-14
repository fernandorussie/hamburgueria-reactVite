import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import api from './api'

class App extends Component{

  state = {
    sanduiches: [],
  }

  async componentDidMount(){
    const response = await api.get('sanduiches');
    console.log(response.data)
    
    this.setState({
      sanduiches: response.data,})
  }

  render(){
    return (
      <div>
        <h1>Lista da Hamburgueria</h1>
        {this.state.sanduiches.map((item) =>(
          <div>
            <h1>{item.nome}</h1>
            <img src={item.imagem} width="250px" alt={item.nome} />
          </div>
        ))}
      </div>
    )
  }
}

export default App
