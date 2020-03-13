import React from 'react'
import {withRouter} from 'react-router-dom'
import AuthService from '../app/service/authService'
function Home (){

    if(AuthService.isMoradorAutenticado()){
        return(
           <h4>
               Seja bem-vindo, morador!!
           </h4>
            
        )
    }else if(AuthService.isFuncionarioAutenticado()){
        return(
            <h4>
                Seja bem-vindo, Funcionario!
            </h4>
             
         )
    }else{
        return(
            <h4>
                Pagina inicial
            </h4>
             
         )
    }
}

export default withRouter( Home)