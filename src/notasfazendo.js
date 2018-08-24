import React, { Component } from 'react';
import Navbarcima from './Navbarcima.js'
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class Notasfazendo extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      nota: '',
      sentimento: ''
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((id)=>{
      console.log(id.uid);
      console.log('oiiiiiii');
      if(id){
        this.setState({user: id.uid});
      }
      else {
        this.props.history.push('/Login');
      }
    })
  }
  salvarNota = (e) => {
    e.preventDefault();
    firebase.database().ref('users/' + this.state.user).push({
      nota: this.state.nota,
      sentimento: this.state.sentimento
    })
    this.props.history.push('/notas');
  }

  render() {
    return (
      <div className="row">
        <Navbarcima/>
        <div className="fixed-action-btn">
          <button onClick={(e)=> this.salvarNota(e)} className="btn-floating btn-large btn waves-effect waves-light light-blue darken-1" id="confirma">
            <i className="large material-icons">send</i>
          </button>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea value={this.state.nota} onChange={(e)=>this.setState({nota: e.target.value})} id="textarea1" className="materialize-textarea" type="text"></textarea>
              <label htmlFor="textarea1">Insira sua anotação aqui</label>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="input-field col s6">
            <input value={this.state.sentimento} onChange={(e)=>this.setState({sentimento: e.target.value})} id="first_name2" type="text" className="validate"/>
            <label className="active" htmlFor="first_name2">Sentindo-se</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Notasfazendo;
