import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/cadastrar" component={CadastroUsuario}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas