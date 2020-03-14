import React from 'react';
import CKEditor from "react-ckeditor-component";
import AvisoService from '../../app/service/avisoService';
import FormGroup from '../../components/form-group'
import {mensagemSucesso} from '../../components/toastr'
import Card from '../../components/card';
import FuncionarioService from '../../app/service/funcionarioService'
import SelectMenu from '../../components/selectMenu'
import {mensagemErro} from '../../components/toastr'

class CadastroAviso extends React.Component {

    constructor(props){
        super(props);
        this.service = new AvisoService();
        this.funcionarioService = new FuncionarioService();
        this.onChange = this.onChange.bind(this);
        this.state = {
            funcionarios:[],
            aviso: {
                autor: '',
                texto: '',
            }
        }
        this.funcionarioService.listar().then(resposta => {
            this.setState({funcionarios: resposta.data,aviso: {autor:this.state.aviso.autor,texto:this.state.aviso.texto}})
        }).catch(error => {
            console.log(error+'esse é o erro')
        })
    }

    onChange(evt) {
        var html = evt.editor.getData();
        this.setState({aviso: {autor:this.state.aviso.autor,texto:html}});
      }

      cadastrar = () => {
        const msgs = this.validar();
        if(msgs && msgs.length>0){
            msgs.forEach((msg,index)=>{
                mensagemErro(msg);
            })
            return false;
        }
        const aviso = {
            texto:this.state.aviso.texto
        }
       this.service.salvar(this.state.aviso.autor,aviso).then(response => {
            mensagemSucesso("Aviso cadastrado com sucesso!");
           this.props.history.push("/");
       });
        }

    buscar(){
        this.funcionarioService.listar().then(resposta => {
            this.setState({funcionarios: resposta.data,aviso:{autor:this.state.aviso.autor,texto:this.state.aviso.texto}})
        }).catch(error => {
            console.log(error+'esse é o erro')
        })
    }
    cancelar = () => {
        this.props.history.push("/")
    }

    handleChange = (event)=>{
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]: value})
    }

    atualizaAutor = (event) => {
        this.setState({funcionarios: this.state.funcionarios,aviso:{autor:event.target.value,texto:this.state.aviso.texto}})
    }

    validar(){
        const msgs = []
        if(!this.state.aviso.autor){
            msgs.push('O campo Autor é obrigatório.')
        }

        return msgs;
    }

    render() {
        return (
            <div className="bs-docs-section">
                <Card title="Cadastrar aviso">
                <div className="aviso" onLoad={this.buscar}>
                    <FormGroup label="Autor: *" htmlFor="inputAutor">
                        <SelectMenu className='form-control' value={this.state.aviso.autor}
                            lista={this.state.funcionarios} name="aviso" onChange={this.atualizaAutor}/>
                    </FormGroup>
                    <FormGroup label="Mensagem: *" htmlFor="inputMensagem">
                        <CKEditor
                        content={this.state.aviso.texto}
                        onChange={this.onChange}
                            data="" events={{
                                change: this.onChange
                            }}
                        />
                    </FormGroup>

                    <br/>
                        <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                        <button onClick={this.cadastrar} type="button" className="btn btn-success">Cadastrar</button>
                </div>
                </Card>
                <br/>
            </div>
        );
    }
}

export default CadastroAviso;