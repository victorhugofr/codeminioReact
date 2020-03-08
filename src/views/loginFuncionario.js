import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'

import FuncionarioService from '../app/service/funcionarioService'
import {mensagemErro} from '../components/toastr'
import {mensagemSucesso} from '../components/toastr'

class LoginFuncionario extends React.Component{

    state ={
        login:'',
        senha: '',
        mensagemErro: null
    }

    constructor(){
        super();
        this.service = new FuncionarioService();
    }
    entrar = async () => {
        this.service.autenticar({
            login: this.state.login,
            senha: this.state.senha
        }).then(response => {
                localStorage.setItem('usuario_logado', JSON.stringify(response.data))
            //    mensagemSucesso(response.data)
            }).catch(erro => {
                mensagemErro(erro.response.data)
            })
    }

    render(){
        return(
                            <div className="bs-docs-section">
                        <Card title="Login funcionario">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Login: " htmlFor="inputLogin">
                                                <input type="text" className="form-control" id="inputLogin" value={this.state.login}
                                                       onChange={e=>this.setState({login: e.target.value})} aria-describedby="loginHelp" placeholder="Digite o Login"/>

                                            </FormGroup>

                                            <FormGroup label="Senha: " htmlFor="inputPassword">
                                                <input type="password" className="form-control" id="inputPassword" value={this.state.senha}
                                                       onChange={e=>this.setState({senha: e.target.value})}
                                                       placeholder="Digite a Senha"/>
                                            </FormGroup>
                                            <button className="btn btn-success" onClick={this.entrar}>Entrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                            </div>
        )
    }
}

export default withRouter(LoginFuncionario)