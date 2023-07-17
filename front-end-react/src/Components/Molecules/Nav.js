import React from "react";

import NavItem from "../Atoms/NavItem";
import NavBasketButton from "../Atoms/NavBasketButton";

const Nav = ({}) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavItem text="Games" aria_current="page" page="/" />
      <li className="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Contact
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item">gameshop@businessemail.com</a>
          </li>
          <li>
            <a className="dropdown-item">+44(0) 77664 57123</a>
          </li>
        </ul>
      </li>
      <NavItem text="Admin" page="/admin" />
      <NavBasketButton text="Basket" page="/basket" />
    </ul>
  );
};

export default Nav;
