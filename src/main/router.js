import React from 'react'
import {Route, Switch, HashRouter, Redirect, BrowserRouter} from 'react-router-dom'
import LoginMorador from '../views/loginMorador'
import CadastroMorador from '../views/cadastroMorador'
import LoginFuncionario from '../views/loginFuncionario'
import ChooseRole from '../views/chooseRole'
import IndexMorador from '../views/indexMorador'
import IndexFuncionario from '../views/indexFuncionario'
import AcessoNegado from '../views/acesso/acessonegado'

import Home from '../views/home'
import { AuthConsumer } from './provedorAutenticacao'

function RotaAutenticada(props){
    console.log('s')
    return(
        <Route render = {(componentProps)=>{
            if(props.estaAutenticado){
                return(
                    <props.component {...componentProps}/>
                )
            }else{
                console.log('nao esta')
                return(
                    <Redirect to={{pathname: '/acessonegado',state:{from: props.location}}}/>
                )
            }
        }}></Route>
    )
}

function Rotas(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/chooseRole" component={ChooseRole}></Route>
                <Route path="/loginMorador" component={LoginMorador}></Route>
                <Route path="/loginFuncionario" component={LoginFuncionario}></Route>
                <Route path="/morador/cadastrar" component={CadastroMorador}></Route>
                <Route path="/funcionario/cadastrar" component={CadastroMorador}></Route>
                <RotaAutenticada component={IndexMorador} estaAutenticado={props.isMoradorAutenticado} path="/morador/index" ></RotaAutenticada>
                <RotaAutenticada component={IndexFuncionario} estaAutenticado={props.isFuncionarioAutenticado} path="/funcionario/index"></RotaAutenticada>
                <Route path="/acessonegado" component={AcessoNegado}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default ()=>(
    <AuthConsumer>
        { (context) => (<Rotas isMoradorAutenticado = {context.isMoradorAutenticado} 
                isFuncionarioAutenticado={context.isFuncionarioAutenticado}/>)}

    </AuthConsumer>
)