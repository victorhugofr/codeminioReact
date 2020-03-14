import React from 'react'
import AuthService from '../app/service/authService'
import { AuthContext } from '../main/provedorAutenticacao'
import { AuthConsumer } from '../main/provedorAutenticacao'

function IndexFuncionario (props){
    if(AuthService.isFuncionarioAutenticado()){
            return(
               <h4 className="mt-5">
                   {props.funcionarioAutenticado} ele
               </h4>
                 
             )
    }
}

IndexFuncionario.contextType = AuthContext

export default ()=>(
    <AuthConsumer>
        { (context) => (<IndexFuncionario funcionarioAutenticado = {context.nomefuncionario}/>)}
    </AuthConsumer>
)