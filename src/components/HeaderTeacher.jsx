import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class HeaderTeacher extends Component {
    render() {
        return (
            <div>
            <div>
            <nav className="navbar navbar-dark bg-dark">
            <ul class="navbar-nav">
            <li class="nav-item mr-auto">
            <Link className="nav-link active" to="/teacher">Inicio</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link active" to="/login">Salir</Link>
            </li>
            </ul>
            </nav>
            </div>
            </div>
        )
    }
}
