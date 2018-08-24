import React, { Component } from 'react';
import './App.css';

class Navbarcima extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue center darken-1">
          <a href="#!" className="brand-logo"><i className="material-icons">book</i>Agenda</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbarcima;
