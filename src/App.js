import axios from 'axios'
import React, { Component } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      array:[]
    }
  }
  componentDidMount(){
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311/styles',{
      headers:{Authorization:'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'}
    }).then((res)=>console.log(res))
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
      </div>

    )
  }
}
