import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Product from './Components/Product/Product'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';
export default class App extends Component {
  constructor(props){
    super(props)
      this.state={
        inventory:[]
      }
  }
  componentDidMount (){
    axios.get ('/api/products')
    .then(res => {
      this.setState({inventory: res.data})
      console.log (this.state.inventory)
    })
    .catch(err => console.log(err));
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Product
         />
        <Dashboard
          inventory = {this.state.inventory}
        />
  
      </div>
    );
  }
}

