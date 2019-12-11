import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { NEW_TEACHER } from '../../mutations'

import { withRouter } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';


class NewTeacher extends Component {

    state = {
        teacher:{
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }

    render(){
    return (
        <div>
            <HeaderAdmin />

            <Mutation mutation={NEW_TEACHER} onCompleted={()=>
                this.props.history.push(`/admin`)
            }>
            {createTeacher=>(
                <div className="container">

            <form onSubmit={e => {
                            e.preventDefault();
                            const { first_name,last_name,email,password } = this.state.teacher;
                            const teacherinfo = {
                                first_name,last_name,email,password
                            };
                            console.log(teacherinfo);
                            createTeacher({ variables: { teacherinfo } });
                        }}>
                <div>
                    <label htmlFor="inputName" >Nombre</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Nombre" 
                        onChange={e => {
                            this.setState({
                                teacher: {
                                    ...this.state.teacher,
                                    first_name: e.target.value
                                }
                        })
                        }} />
                </div>

                <div>
                    <label htmlFor="inputApellido" >Apellido</label>
                        <input type="text" className="form-control" id="inputApellido" placeholder="Apellido" 
                        onChange={e => {
                            this.setState({
                                teacher: {
                                    ...this.state.teacher,
                                    last_name: e.target.value
                                }
                        })
                        }} />
                </div>

                <div>
                    <label htmlFor="inputEmail" >Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" 
                        onChange={e => {
                            this.setState({
                                teacher: {
                                    ...this.state.teacher,
                                    email: e.target.value
                                }
                        })
                        }} />
                </div>


                <div>
                    <label htmlFor="inputPass" >Password</label>
                        <input type="password" className="form-control" id="inputPass" placeholder="Password" 
                        onChange={e => {
                            this.setState({
                                teacher: {
                                    ...this.state.teacher,
                                    password: e.target.value
                                }
                        })
                        }} />
                </div>
                <button type="submit" className="btn btn-success justify-content-center m-4" >Agregar</button>
            </form>
                </div>
            )}
            </Mutation>
        </div>
    );
    }
}

export default withRouter(NewTeacher);