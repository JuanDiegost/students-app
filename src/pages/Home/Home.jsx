import React, { Fragment } from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import HeaderAdmin from '../../components/HeaderAdmin';

const buttons = [
    {
        title:'Registrar Docente',
        icon:'form',
        to:'/agregar-docente'

    },
    {
        title:'Subir archivo',
        icon:'upload',
        to:'/subir-archivo'
    },
     {
        title:'Estudiantes',
        icon:'upload',
        to:'/admin/estudiantes'
    }
]

const Home = () => (
    <Fragment>
    <HeaderAdmin />
    <div className="home">
    
    <h1>Administrador</h1>
    <div>
    {
        buttons.map((btn,index) =>
            <Link size="" icon={btn.icon} className="btn btn-success m-4" key={index} to={btn.to} >{btn.title}</Link>
        )
    }
    </div>
    </div>
    </Fragment>
);

export default Home;