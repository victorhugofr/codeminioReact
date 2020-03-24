import React from 'react'
import NavbarItem from './navbaritem'
import { AuthConsumer } from '../main/provedorAutenticacao';

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Codeminio</a>
            <button className="navbar-toggler" 
                    type="button" data-toggle="collapse" data-target="#navbarColor01" 
                        aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <NavbarItem render = {!props.isMoradorAutenticado && !props.isFuncionarioAutenticado} href="/" label="Início"/>
                    <NavbarItem render = {!props.isMoradorAutenticado && props.isFuncionarioAutenticado} href="/funcionario/index" label="Início"/>
                    <NavbarItem render = {props.isMoradorAutenticado && !props.isFuncionarioAutenticado} href="/morador/index" label="Início"/>
                    <NavbarItem render = {!props.isMoradorAutenticado && !props.isFuncionarioAutenticado} href="/chooseRole" label="Entrar"/>
                    <NavbarItem render = {props.isFuncionarioAutenticado} href="/aviso/cadastro" label="Cadastrar aviso"/>
                    <NavbarItem render = {!props.isMoradorAutenticado && !props.isFuncionarioAutenticado}href="/morador/cadastrar" label="Cadastrar-se"/>
                    <NavbarItem render = {props.isMoradorAutenticado} onClick={props.deslogar} href="/morador/sair" label="Sair"/>
                    <NavbarItem render = {props.isFuncionarioAutenticado} onClick={props.deslogar} href="/funcionario/sair" label="Sair"/>
                </ul>
            </div>
        </nav>
        
    )
}

export default () => (
    <AuthConsumer>
        {(context)=>(
            <Navbar isMoradorAutenticado={context.isMoradorAutenticado} 
                    isFuncionarioAutenticado = {context.isFuncionarioAutenticado}
                    deslogar={context.encerrarSessao}></Navbar>
        )}
    </AuthConsumer>
)