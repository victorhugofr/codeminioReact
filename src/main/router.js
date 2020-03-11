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

function RotaAutenticada({component: Component}, isMoradorAutenticado, ...props){
    return(
        <Route {...props} render = {(componentProps)=>{
            if(isMoradorAutenticado){
                return(
                    <Component {...componentProps}/>
                )
            }else{
                return(
                    <Redirect to={{pathname: '/acessonegado',state:{from: componentProps.location}}}/>
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
                <RotaAutenticada isMoradorAutenticado={props.isMoradorAutenticado} path="/morador/index" component={IndexMorador}></RotaAutenticada>
                <Route path="/acessonegado" component={AcessoNegado}></Route>
            </Switch>
        </HashRouter>
    )
}

export default ()=>(
    <AuthConsumer>
        { (context) => (<Rotas isMoradorAutenticado = {context.isMoradorAutenticado}/>)}

    </AuthConsumer>
)