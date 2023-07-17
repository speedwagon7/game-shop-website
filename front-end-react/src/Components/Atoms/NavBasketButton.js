import React from "react";
import {NavLink} from "react-router-dom"

const NavItem = ({ text, page, aria_current }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" aria-current={aria_current} to={page}>
      {text} 
      <i className="fa fa-basket-shopping ms-1" />
      </NavLink>
    </li>
  );
};

export default NavItem;