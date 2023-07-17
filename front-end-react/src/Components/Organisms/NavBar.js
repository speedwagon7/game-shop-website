import PropTypes from 'prop-types'
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Nav from '../Molecules/Nav'
import SearchBar from '../Molecules/SearchBar'

const NavBar = (props) => {
    const { brand } = props
    return (<div className="navbar-container">
        <nav className="navbar navbar-expand-lg bg-purp navbar-dark mb-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{brand}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav/>
                    <SearchBar/>
                </div>
            </div>
        </nav></div>
    )
}

NavBar.defaultProps = {
    brand: "GameShop"
}

NavBar.propTypes = {
    brand: PropTypes.string.isRequired
}

export default NavBar