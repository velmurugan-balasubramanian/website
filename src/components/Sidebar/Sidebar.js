import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import './Sidebar.css'
import { Button } from 'primereact/button';
import dp from '../../assets/dp.jpg';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="display-picture">
        <a href="/">
            <img className="image" src={dp}></img>
        </a>   
      </div>
      <div className="nav-menu">
       <ul>
         <li>
           <NavLink to="/" exact>Home</NavLink>
         </li>
         <li>
           <NavLink to="/about" >About</NavLink>
         </li>
         <li>
           <NavLink to="/skills" >Skills</NavLink>
         </li>
         <li>
          <NavLink to="/education" >Education</NavLink>
         </li>
         <li>
          <NavLink to="/work" >Work</NavLink>
         </li>
         <li>
        <NavLink to="/projects" >Projects</NavLink>
         </li>
         <li>
        <NavLink to="/blog" >Blog</NavLink>
         </li>
       </ul>
      </div>

    </div>
  );
};


Sidebar.propTypes = {

};


export default Sidebar;
