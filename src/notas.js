import React, { Component } from 'react';
import Navbar from "./navbar.js";
import Navbarcima from './Navbarcima.js'
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'materialize-css';

class Notas extends Component {
  constructor(props){
    super(props);
    this.state = {
      notas: {},
      user: null
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((id)=>{
      if(id){
        this.setState({user: id.uid});
        firebase.database().ref('users/' +this.state.user).once('value').then((snapshot)=>{
          console.log(snapshot.val());
          console.log('ta dando certo');
          if(snapshot.val()){
            this.setState({notas: snapshot.val()});
          }
        })
      }
    })
  }
  criarmostracao(){
    return Object.keys(this.state.notas).map((nota, oii) =>(
        <a className="collection-item" key={oii}><span className="badge">{this.state.notas[nota].sentimento}</span>{this.state.notas[nota].nota}</a>
    ))
  }


  render() {
    return (
      <div className="row">
        <Navbarcima/>
        <br/>
        <div className="container">
          <div className="collection">
            {this.criarmostracao()}
          </div>
          <Link to={"/Notasfazendo"}><button className="btn waves-effect waves-light col s12 light-blue darken-1"><i className="material-icons">add</i></button></Link>
        </div>
        <Navbar/>
      </div>
    );
  }
}

export default Notas;
