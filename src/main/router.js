import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import LoginMorador from '../views/loginMorador'
import CadastroMorador from '../views/cadastroMorador'
import LoginFuncionario from '../views/loginFuncionario'
import ChooseRole from '../views/chooseRole'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/chooseRole" component={ChooseRole}></Route>
                <Route path="/loginMorador" component={LoginMorador}></Route>
                <Route path="/loginFuncionario" component={LoginFuncionario}></Route>
                <Route path="/morador/cadastrar" component={CadastroMorador}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas