import React, { Component } from 'react';
import Navbar from './navbar.js';
import Navbarcima from './Navbarcima.js'
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
  }
  registro = (e) => {
    e.preventDefault();
    console.log('entrou');
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(function(data) {
      console.log(data);
    });
  }
  render() {
    return (
      <div className="row">
       <Navbarcima/>
        <form className="col s12">
         <div className="row">
           <div className="input-field col s6">
             <input id="first_name" type="text" className="validate"/>
             <label htmlFor="first_name">Primeiro Nome</label>
           </div>
           <div className="input-field col s6">
             <input id="last_name" type="text" className="validate"/>
             <label htmlFor="last_name">Sobrenome</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s12">
             <input id="icon_prefix" type="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} className="validate"/>
             <label htmlFor="email_inline">Email</label>
           </div>
          </div>
         <div className="row">
           <div className="input-field col s9">
             <input id="icon_senha" type="password" value={this.state.senha} onChange={(e)=>this.setState({senha: e.target.value})} className="validate"/>
             <label htmlFor="password_inline">Senha</label>
           </div>
           <div className="col s3">
               <a className="btn-floating btn-large waves-effect waves-light light-blue darken-1"  onClick={this.registro} ><i className="material-icons">send</i></a>
           </div>
         </div>
        </form>
        <Navbar/>
      </div>
    );
  }
}

export default App;
