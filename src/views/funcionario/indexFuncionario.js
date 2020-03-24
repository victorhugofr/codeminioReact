import React from 'react'
import AuthService from '../../app/service/authService'
import AvisoService from '../../app/service/avisoService'
import { AuthContext } from '../../main/provedorAutenticacao'
import { AuthConsumer } from '../../main/provedorAutenticacao'
import Aviso from '../../components/aviso'

class IndexFuncionario extends React.Component {
    constructor(props){
        super(props);
        this.avisoService = new AvisoService();
        this.state = {
            avisos: []
        }

        this.avisoService.listar().then(resposta => {
            this.setState({avisos: resposta.data})
        }).catch(error => {
            console.log(error+'esse é o erro')
        })
    }

    avisos(){
        var avisoscpy = this.state.avisos.reverse();
        const options = avisoscpy.map(opt => {
            return <Aviso title = {opt.autor.nome}> {opt.texto }</Aviso>
        })
        return options
    }


    render(){
        if(AuthService.isFuncionarioAutenticado()){
                return(
                    <div className="col-md-12" style={{position: 'relative'}}>
                        <h2 className="mt-4">
                            Olá, { AuthService.obterFuncionarioAutenticado().nome }
                        </h2>
                         
                         <p>Avisos recentes:</p>
                         
                        {this.avisos()}
                        <br/>
                    </div>
                )
        }
    }
}

IndexFuncionario.contextType = AuthContext

export default ()=>(
    <AuthConsumer>
        { (context) => (<IndexFuncionario funcionarioAutenticado = {context.nomefuncionario}/>)}
    </AuthConsumer>
)