import React from 'react';
import Card from '../../components/card';
import FormGroup from '../../components/form-group'


import 'bootswatch/dist/lux/bootstrap.css'
import {mensagemErro} from '../../components/toastr'
import { withRouter } from 'react-router-dom';
import {mensagemSucesso} from '../../components/toastr'

import MoradorService from '../../app/service/moradorService'
class CadastroMorador extends React.Component {
    state={
        cpf: '',
        nome: '',
        email: '',
        apartamento: '',
        login: this.cpf,
        telefone: '',
        senha: '',
        senhaRepeticao: '',
    }

    constructor(){
        super();
        this.service = new MoradorService();
    }

    validar(){
        const msgs = []
        if(!this.state.nome){
            msgs.push('O campo Nome é obrigatório.')
        }

        if(!this.state.email){
            msgs.push('O campo Email é obrigatório.');
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Informe um Email válido');
        }

        if(this.state.senha !== this.state.senhaRepeticao){
            msgs.push('As senhas não são iguais');
        }
        return msgs;
    }

    cadastrar = () => {
        const msgs = this.validar();
        if(msgs && msgs.length>0){
            msgs.forEach((msg,index)=>{
                mensagemErro(msg);
            })
            return false;
        }
        const usuario = {
            cpf: this.state.cpf,
            nome: this.state.nome,
            email: this.state.email,
            apartamento: this.state.apartamento,
            login: this.state.cpf,
            telefone:  this.state.telefone,
            senha:  this.state.senha,
            senhaRepeticao:  this.state.senhaRepeticao,
        }
       this.service.salvar(usuario).then(response => {
            mensagemSucesso("Morador cadastrado com sucesso! Faça o login para acessar o sistema.");
           this.props.history.push("/login");
       });
    }

    cancelar = () => {
        this.props.history.push("/")
    }
  render(){
    return(
        <div className="bs-docs-section">
            <Card title="Cadastro de Morador">   
                        <div className="bs-component">
                            <row>
                                <div className="col-ms-12">
                                    <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text" id="inputNome" name="nome" className="form-control"
                                        onChange={e=>this.setState({nome: e.target.value})}/>
                                     </FormGroup>
                                </div>
                            </row>
                        <div className="row">
                            <div className="col">
                                <FormGroup label="CPF: *" htmlFor="inpuCpf">
                                    <input type="text" id="inputCPF" name="cpf" className="form-control"
                                            onChange={e=>this.setState({cpf: e.target.value})}/>
                                </FormGroup>
                                
                                <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                    <input type="text" id="inputTelefone" name="telefone" className="form-control" 
                                            onChange={e=>this.setState({telefone: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password" id="inputSenha" name="senha" className="form-control"
                                            onChange={e=>this.setState({senha: e.target.value})}/>
                                </FormGroup>
                            </div>

                            <div className="col">
                                <FormGroup label="Apartamento: *" htmlFor="inputApartamento">
                                    <input type="text" id="inputApartamento" name="apartamento" className="form-control"
                                            onChange={e=>this.setState({apartamento: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" id="inputEmail" name="email" className="form-control"
                                            onChange={e=>this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Confirme sua senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password" id="inputRepitaSenha" name="senha" className="form-control"
                                            onChange={e=>this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                            </div>
                            <br/>
                        </div>
                        <row>
                            <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                            <button onClick={this.cadastrar} type="button" className="btn btn-success">Cadastrar</button>
                        </row>
                </div>
            </Card>
            <br/>
        </div>
    );
  }
}

export default withRouter( CadastroMorador)