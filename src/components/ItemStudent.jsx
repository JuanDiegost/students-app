import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class ItemStudent extends Component {
  
    render() {
    const { student } = this.props;
    const dropoutReason = student.dropoutReason ? <p><b>Motivo de la deserción: </b>{student.dropoutReason} </p> :'';
    const comment = student.comment ? <p><b>Comentarios: </b>{student.comment} </p> :'';
    const notesCall = student.notesCall ? <p><b>Datos llamada: </b>{student.notesCall} </p> :'';

    return (
      <div className="col-12 m-1"> 
        <div className="card">
          <div className="card-body">
          <div className="row">

          <div className="col-5">
            <h3>{student.last_name} {student.first_name} </h3>
            <p>{student.program}</p>
            <p> <b>Código: </b> {student.code}</p>
            <p> <b>Telefono : </b> {student.phone}</p>
            <p> <b>Email Personal: </b> {student.personal_mail}</p>
            <p> <b>Email Institucional: </b> {student.intitud_mail}</p>
          </div>
          <div className="col-4">
            {dropoutReason}
            {comment}
            {notesCall}
          </div>
          <div className="col-3">
              <Link className="btn btn-primary" to={`/editar-student/${student._id}`} >Editar</Link>
          </div>
          </div>
          <p></p>
          </div>
        </div>
      </div>
    )
  }
}
