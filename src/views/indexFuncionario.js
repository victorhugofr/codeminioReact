import React from 'react'
import {withRouter} from 'react-router-dom'

class IndexFuncionario extends React.Component{
    render(){
        return(
            <h4 className="mt-5">
                Bem-vindo, funcionario!
            </h4>
        )
    }
}

export default withRouter( IndexFuncionario)