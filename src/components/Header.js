import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <NavLink to='/'><h1>Home</h1></NavLink>
        <NavLink to='/create'><h1>Add New Post</h1></NavLink>
    </div>
);

export default Header;