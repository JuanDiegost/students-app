import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { UPTADE_STUDENT } from '../mutations';

import { withRouter } from 'react-router-dom';


class FormularioEditarStudent extends Component {

    state={
        student: this.props.student
    }

    render() {


        return (
                <Mutation mutation={UPTADE_STUDENT
                } onCompleted={() => this.props.history.push('/teacher')}>

                    {editStudent => (

                        <form className="row" onSubmit={e => {
                            e.preventDefault();                                                       
                            const studentInfo = this.state.student;
                            console.log(studentInfo);
                            editStudent({ variables: { studentInfo } });

                        }}>
                        <div className="col-12 form-group">
                            <label htmlFor="inputComment" className="col-form-label">Comentario</label>
                            <textarea type="text" className="form-control w-100" id="inputComment" placeholder="Comentario" value={this.state.student.comment} onChange={e => {
                                this.setState({
                                    student: {
                                        ...this.state.student,
                                        comment: e.target.value
                                    }
                                })
                            }} />
                        </div>

                        <div className="col-12 form-group">
                            <label htmlFor="inputnotesCall" className="col-form-label">Datos llamada</label>
                            <textarea type="text" className="form-control w-100" id="inputnotesCall" placeholder="Notas llamada" value={this.state.student.notesCall} onChange={e => {
                                this.setState({
                                    student: {
                                        ...this.state.student,
                                        notesCall: e.target.value
                                    }
                                })
                            }} />
                        </div>

                        <div className="col-12 form-group">
                            <label htmlFor="inputdropoutReason" className="col-form-label">Motivo de la deserción</label>
                            <textarea type="text" className="form-control w-100" id="inputdropoutReason" placeholder="Motivo de la deserción" value={this.state.student.dropoutReason} onChange={e => {
                                this.setState({
                                    student: {
                                        ...this.state.student,
                                        dropoutReason: e.target.value
                                    }
                                })
                            }} />
                        </div>

                        <div className="col-12 form-group">
                        <button type="submit" className="btn btn-success mb-2" >Editar</button>
                        </div>
                        </form>
                    )}  
                    </Mutation>
        )
    }
}

export default withRouter(FormularioEditarStudent);
