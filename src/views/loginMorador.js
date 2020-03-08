import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'

import MoradorService from '../app/service/moradorService'
import {mensagemErro} from '../components/toastr'
import {mensagemSucesso} from '../components/toastr'

class LoginMorador extends React.Component{

    state ={
        login:'',
        senha: '',
        mensagemErro: null
    }

    constructor(){
        super();
        this.service = new MoradorService();
    }
    entrar = async () => {
        this.service.autenticar({
            login: this.state.login,
            senha: this.state.senha
        }).then(response => {
                localStorage.setItem('morador_logado', JSON.stringify(response.data))
            //    mensagemSucesso(response.data)
            }).catch(erro => {
                mensagemErro(erro.response.data)
            })
    }

    prepareCadastrar = () => {
        this.props.history.push("/morador/cadastrar")
    }

    render(){
        return(
                            <div className="bs-docs-section">
                        <Card title="Login morador">
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
                                            <button className="btn btn-danger" onClick={this.prepareCadastrar}>Cadastrar</button>
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

export default withRouter(LoginMorador)