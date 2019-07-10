import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {startLogout} from "../actions/auth"

export const Header = ({startLogout}) => (
  <header>
    <h1>Boilerplate</h1>
    <Link to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</Link>
    <button onClick={startLogout}>Logout</button>   
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () =>dispatch(startLogout())
  
});

export default connect(undefined,mapDispatchToProps)(Header);
