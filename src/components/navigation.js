import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';


function Nav() {
    const style = {
      color: 'white',
    }


  return (
  <nav className="nav">

    <ul className="nav-link">
      <Link  style={style} to='/calendar'>
      <li>Calendar</li>
      </Link>
      <Link style={style} to='/trainings'>
      <li >Trainings</li>
      </Link>
      <Link  style={style} to='/customers'>
      <li >Customers</li>
      </Link>
    </ul>
  </nav>
       
  );
}

export default Nav;
