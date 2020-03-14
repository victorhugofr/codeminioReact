import React from 'react'
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import LoginMorador from '../views/morador/loginMorador'
import CadastroMorador from '../views/morador/cadastroMorador'
import LoginFuncionario from '../views/funcionario/loginFuncionario'
import ChooseRole from '../views/chooseRole'
import IndexMorador from '../views/morador/indexMorador'
import IndexFuncionario from '../views/funcionario/indexFuncionario'
import AcessoNegado from '../views/acesso/acessonegado'
import CadastroAviso from '../views/aviso/cadastroAviso'

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
                <Route path="/aviso/cadastro" component={CadastroAviso}></Route>
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