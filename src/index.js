import './css/materialize.css';
import './icons/icon.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
import Login from './components/Login';
import Notas from './notas';
import Materialize from 'materialize-css';
import{ HashRouter, Route, Switch } from 'react-router-dom';
import Notasfazendo from './notasfazendo';
window.Materialize = Materialize;

var config = {
    apiKey: "AIzaSyBukh7YAjmcu32GNJeSzSiKmBuB2fVY92I",
    authDomain: "agenda1-24d20.firebaseapp.com",
    databaseURL: "https://agenda1-24d20.firebaseio.com",
    projectId: "agenda1-24d20",
    storageBucket: "agenda1-24d20.appspot.com",
    messagingSenderId: "444157660128"
  };
  firebase.initializeApp(config);

ReactDOM.render(
<HashRouter>
  <Switch>
    <Route exact path="/Notasfazendo" component={Notasfazendo}></Route>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/notas" component={Notas}></Route>
    <Route exact path="/Login" component={Login}></Route>
  </Switch>
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
