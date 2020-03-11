import React from 'react'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import LoginMorador from '../views/loginMorador'
import CadastroMorador from '../views/cadastroMorador'
import LoginFuncionario from '../views/loginFuncionario'
import ChooseRole from '../views/chooseRole'
import IndexMorador from '../views/indexMorador'
import AcessoNegado from '../views/acesso/acessonegado'

import AuthService from '../app/service/authService'
import { AuthConsumer } from './provedorAutenticacao'

function RotaAutenticada(props){
    return(
        <Route render = {()=>{
            if(props.estaAutenticado){
                return(
                    <props.component/>
                )
            }else{
                return(
                    <Redirect to={{pathname: '/acessonegado',state:{from: props.location}}}/>
                )
            }
        }}></Route>
    )
}

function Rotas(props){
    return(
        <HashRouter>
            <Switch>
                <Route path="/chooseRole" component={ChooseRole}></Route>
                <Route path="/loginMorador" component={LoginMorador}></Route>
                <Route path="/loginFuncionario" component={LoginFuncionario}></Route>
                <Route path="/morador/cadastrar" component={CadastroMorador}></Route>
                <Route path="/funcionario/cadastrar" component={CadastroMorador}></Route>
                <RotaAutenticada component={IndexMorador} estaAutenticado={props.isMoradorAutenticado} path="/morador/index" ></RotaAutenticada>
                <Route path="/acessonegado" component={AcessoNegado}></Route>
            </Switch>
        </HashRouter>
    )
}

export default ()=>(
    <AuthConsumer>
        { (context) => (<Rotas isMoradorAutenticado = {context.isAutenticado}/>)}

    </AuthConsumer>
)