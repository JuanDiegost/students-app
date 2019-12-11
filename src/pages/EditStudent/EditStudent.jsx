import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo';
import { STUDENT_BY_ID } from '../../queries';
import FormularioEditarStudent from '../../components/FormularioEditarStudent';
import HeaderTeacher from '../../components/HeaderTeacher';

class EditStudent extends Component {

    state={
        id:''
    }

    componentDidMount () {
                console.log(this.props);

        const { id } = this.props.match.params;
        this.setState({
            id
        })
    }
   
    render() {
        const {id}=this.state;
        return (
            <Fragment>
            <HeaderTeacher />
                <Query query={STUDENT_BY_ID} fetchPolicy='network-only' variables={{ id }}>
                    {({ loading, error, data }) => {
                        if (loading) return "Cargando...";
                        if (error) return `Error: ${error}`;
                        return (
                            <div className="container-fluid">

                            <div className="row">
                            <div className="col m-5">
                                <h1>{data.getStudent.last_name} {data.getStudent.firts_name}</h1>
                                <p><b>Codigo: </b>{data.getStudent.code} </p>
                                <p><b>Escuela: </b>{data.getStudent.school} </p>
                                <p><b>Programa: </b>{data.getStudent.program} </p>
                                <p><b>Zona: </b>{data.getStudent.zone} </p>
                                <p><b>Telefono: </b>{data.getStudent.phone} </p>
                                <p><b>Email Personal: </b>{data.getStudent.personal_mail} </p>
                                <p><b>Email Institucional: </b>{data.getStudent.intitud_mail} </p>
                                <p><b>Tipo: </b>{data.getStudent.type} </p>
                                <p><b>Estrato: </b>{data.getStudent.stratum} </p>
                                <p><b>Discapacidad: </b>{data.getStudent.disability} </p>
                                <p><b>Periodo: </b>{data.getStudent.period} </p>

                            </div>
                            <div className="col">
                                <FormularioEditarStudent student={data.getStudent} />
                            </div>
                            </div>
                            </div>
                        )
                    }}
                </Query>
            </Fragment>
        )
    }
};

export default EditStudent;