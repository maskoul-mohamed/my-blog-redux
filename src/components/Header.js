import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../redux/actions/auth';

const Header = ({ startLogout }) => (
    <div>
        <NavLink to='/dashboard'><h1>Home</h1></NavLink>
        <NavLink to='/create'><h1>Add New Post</h1></NavLink>
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);