import React from 'react'
import {withRouter} from 'react-router-dom'

class IndexMorador extends React.Component{

    permissao = () =>{
        if(!localStorage.getItem('morador_logado')){
            this.props.history.push("/acessonegado");
        }
    }

    render(){
        return(
            <div onLoad={this.permissao}>
                teste
            </div>
        )
    }
}

export default withRouter( IndexMorador)