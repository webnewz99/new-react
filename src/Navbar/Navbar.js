import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = ({element})=> (
    <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="biography">biography</Link></li>
        <li><Link to="contact" >contact me</Link></li>
    </ul>
);

export default Navbar;