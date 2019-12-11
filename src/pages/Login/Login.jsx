import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { AUTENTICAR_USUARIO } from '../../mutations';


const initialState = {
    email: '',
    password: ''
}

class Login extends Component {

    state = {
        ...initialState
    }

    actualizarState = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }


    limpiarState = () => {
        this.setState({ ...initialState });
    }

    iniciarSesion = (e, usuarioAutenticar,emai,password) => {
        e.preventDefault();

        if(emai==='admin' && password ==='123'){
            this.props.history.push('/admin');
        } else {

        usuarioAutenticar().then(async ({ data }) => {
            localStorage.setItem('userId', data.autUser._id);

            this.limpiarState();
            this.props.history.push('/teacher');
        }).catch(err=>{
            alert(err);
        })
    }
    }

    validarForm = () => {
        const { email, password } = this.state;

        const noValido = !email || !password;

        console.log(noValido);
        return noValido;
    }
    render() {

        const { email, password } = this.state;

        return (
            <div className="container">
                <h1 className="text-center mb-5">Iniciar Sesión</h1>
                <div className="row  justify-content-center">

                    <Mutation
                        mutation={AUTENTICAR_USUARIO}
                        variables={{ email, password }}
                    >
                        {(usuarioAutenticar, { loading, error, data }) => {

                            return (

                                <form
                                    onSubmit={e => this.iniciarSesion(e, usuarioAutenticar,email,password)}
                                    className="col-md-8"
                                >

                                    <div className="form-group">
                                        <label>Usuario</label>
                                        <input
                                            onChange={this.actualizarState}
                                            value={email}
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Usuario"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            onChange={this.actualizarState}
                                            value={password}
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <button
                                        disabled={
                                            loading || this.validarForm()
                                        }
                                        type="submit"
                                        className="btn btn-success float-right">
                                        Iniciar Sesión
                            </button>

                                </form>
                            )
                        }}
                    </Mutation>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);