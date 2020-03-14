import React from 'react'
import AuthService from '../../app/service/authService'
import { AuthContext } from '../../main/provedorAutenticacao'
import { AuthConsumer } from '../../main/provedorAutenticacao'

function IndexMorador (props){
    if(AuthService.isMoradorAutenticado()){
        return(
           <h4 className="mt-5">
               Seja bem-vindo, {props.moradorAutenticado}!!
           </h4>
            
        )
    }
}

IndexMorador.contextType = AuthContext

export default ()=>(
    <AuthConsumer>
        { (context) => (<IndexMorador moradorAutenticado = {context.nomemorador}/>)}
    </AuthConsumer>
)