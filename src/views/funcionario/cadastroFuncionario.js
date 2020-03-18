import React from 'react';
import Card from '../../components/card';
import FormGroup from '../../components/form-group'


import 'bootswatch/dist/lux/bootstrap.css'
import { mensagemErro } from '../../components/toastr'
import { withRouter } from 'react-router-dom';

import FuncionarioService from '../../app/service/funcionarioService'
class CadastroFuncionario extends React.Component {
  state = {
    cpf: '',
    nome: '',
    email: '',
    login: this.cpf,
    telefone: '',
    senha: '',
    senhaRepeticao: '',
  }

  constructor() {
    super();
    this.service = new FuncionarioService();
  }

  validar() {
    const msgs = []
    if (!this.state.nome) {
      msgs.push('O campo Nome é obrigatório.')
    }

    if (!this.state.email) {
      msgs.push('O campo Email é obrigatório.');
    } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push('Informe um Email válido');
    }

    if (this.state.senha !== this.state.senhaRepeticao) {
      msgs.push('As senhas não são iguais');
    }
    return msgs;
  }

  cadastrar = () => {
    const msgs = this.validar();
    if (msgs && msgs.length > 0) {
      msgs.forEach((msg, index) => {
        mensagemErro(msg);
      })
      return false;
    }
    const usuario = {
      cpf: this.state.cpf,
      nome: this.state.nome,
      email: this.state.email,
      login: this.state.cpf,
      telefone: this.state.telefone,
      senha: this.state.senha,
      senhaRepeticao: this.state.senhaRepeticao,
    }
    this.service.salvar(usuario).then(response => {
      mensagemSucesso("Funcionario cadastrado com sucesso!");
      this.props.history.push("/login");
    });
  }

  cancelar = () => {
    this.props.history.push("/login")
  }
  render() {
    return (
      <div className="bs-docs-section">
        <Card title="Cadastro de Funcionario">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="CPF: *" htmlFor="inpuCpf">
                  <input type="text" id="inputCPF" name="cpf" className="form-control"
                    onChange={e => this.setState({ cpf: e.target.value })} />
                </FormGroup>
                <FormGroup label="Nome: *" htmlFor="inputNome">
                  <input type="text" id="inputNome" name="nome" className="form-control"
                    onChange={e => this.setState({ nome: e.target.value })} />
                </FormGroup>
                <FormGroup label="Email: *" htmlFor="inputEmail">
                  <input type="email" id="inputEmail" name="email" className="form-control"
                    onChange={e => this.setState({ email: e.target.value })} />
                </FormGroup>
                <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                  <input type="text" id="inputTelefone" name="telefone" className="form-control"
                    onChange={e => this.setState({ telefone: e.target.value })} />
                </FormGroup>
                <FormGroup label="Senha: *" htmlFor="inputSenha">
                  <input type="password" id="inputSenha" name="senha" className="form-control"
                    onChange={e => this.setState({ senha: e.target.value })} />
                </FormGroup>
                <FormGroup label="Confirme sua senha: *" htmlFor="inputRepitaSenha">
                  <input type="password" id="inputRepitaSenha" name="senha" className="form-control"
                    onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                </FormGroup>
                <br />
                <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                <button onClick={this.cadastrar} type="button" className="btn btn-success">Cadastrar</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(CadastroFuncionario)
