import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class HeaderAdmin extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav">
            <li className="nav-item mr-auto">
            <Link className="nav-link active" to="/admin">Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/login">Salir</Link>
            </li>
            </ul>
            </nav>
            </div>
        )
    }
}
