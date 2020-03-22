import React from 'react'
import Card from '../components/card'

import {withRouter} from 'react-router-dom'

class ChooseRole extends React.Component{
    state = {
        res: ''
    }

    loginMorador = () => {
        this.props.history.push("/loginMorador")
    }

    loginFuncionario = () => {
        this.props.history.push("/loginFuncionario")
    }

    render(){
        return(
            <div className="col-md-8" style={{position: 'relative', left: '220px'}}>
            <div className="bs-docs-section">
            <Card title="O que você é?">
                <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                <button className="btn btn-info btn-lg btn-block" onClick={this.loginMorador} >Morador</button>
                <button className="btn btn-success btn-lg btn-block" onClick={this.loginFuncionario}>Funcionario</button>
                </fieldset>
                </div>
                </div></div>
            </Card>
            </div>
            </div>
        )
    }
}

export default withRouter(ChooseRole)