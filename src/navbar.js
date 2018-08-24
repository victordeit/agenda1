import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="fixed-action-btn toolbar">
        <a className="btn-floating btn-large light-blue darken-1">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li className="waves-effect waves-light"><Link to={"/Login"}><i className="material-icons">contacts</i></Link></li>
          <li className="waves-effect waves-light"><Link to={"/notas"}><i className="material-icons">rate_review</i></Link></li>
          <li className="waves-effect waves-light"><Link to={"/"}><i className="material-icons">create</i></Link></li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
