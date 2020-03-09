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

    validar(){
        const msgs = []
        if(!this.state.login){
            msgs.push('Informe um login.')
        }

        if(!this.state.senha){
            msgs.push('Informe sua senha.');
        }
        return msgs;
    }

    entrar = async () => {
        const msgs = this.validar();
        if(msgs && msgs.length>0){
            msgs.forEach((msg,index)=>{
                mensagemErro(msg);
            })
            return false;
        }

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
                                    <div>
                                        <button className="btn btn-success btn-block" onClick={this.entrar}>Entrar</button>
                                        <br/>
                                            Não possui uma conta?
                                        <br/>
                                        <button className="btn btn-link mr-6" onClick={this.prepareCadastrar}>Cadastrar</button>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </Card>
                <br/><br/>
            </div>
                            
        )
    }
}

export default withRouter(LoginMorador)