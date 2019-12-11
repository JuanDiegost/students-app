import React from 'react'
import ListStudents from '../../components/ListStudents';
import { Query } from 'react-apollo';
import { STUDENTS_LIST_BY_TEACHER } from '../../queries';
import HeaderTeacher from '../../components/HeaderTeacher';

export default function Teacher() {
    const idTeacher = localStorage.getItem('userId');
    return (
        <div>
        <HeaderTeacher />
            <Query query={STUDENTS_LIST_BY_TEACHER} variables={{ idTeacher }} 
            fetchPolicy='network-only' >
        {({ loading, error, data }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error}`;
            return (
                <div className="container-fluid mb-5">
                    <h3 >Lista de Estudiantes</h3>
                    <div className="row">
                        <ListStudents listStudent={data.getStudentsByTeacher} />
                    </div>
                </div>
            )
        }}
    </Query>
        </div>
    )
}
