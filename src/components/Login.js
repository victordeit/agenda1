import React, { Component } from 'react';
import Navbar from ".././navbar.js";
import Navbarcima from '.././Navbarcima.js'
import firebase from 'firebase/app';
import 'firebase/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
  }
  login = (e) => {
    e.preventDefault();
    console.log('entrou');
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then((data) =>{
      this.props.history.push('/notas');
    });
  }
  render() {
    return (
      <div className="row">
      <Navbarcima/>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} className="validate"/>
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">check</i>
              <input id="icon_senha" type="password" value={this.state.senha} onChange={(e)=>this.setState({senha: e.target.value})} className="validate"/>
              <label htmlFor="icon_senha">Senha</label>
            </div>
            <button className="btn waves-effect waves-light col s12 light-blue darken-1" onClick={this.login} name="action">
              <i className="material-icons">send</i>
            </button>
          </div>
        </form>
        <Navbar/>
      </div>
    );
  }
}

export default Login;
