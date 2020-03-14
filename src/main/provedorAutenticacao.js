import React from 'react'
import AuthService from '../app/service/authService'

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component{
    state={
        funcionarioAutenticado:null,
        moradorAutenticado: null,
        nomefuncionario: '',
        nomemorador:'',
        isMoradorAutenticado: AuthService.isMoradorAutenticado(),
        isFuncionarioAutenticado: AuthService.isFuncionarioAutenticado()
    }

    iniciarSessaoMorador = (morador) =>{
        AuthService.logarMorador(morador);
        this.setState({isMoradorAutenticado:true, moradorAutenticado: morador,nomemorador: morador.nome});
    }

    iniciarSessaoFuncionario =(funcionario)=>{
        AuthService.logarFuncionario(funcionario);
        this.setState({isFuncionarioAutenticado:true, funcionarioAutenticado: funcionario,nomefuncionario: funcionario.nome});
    }

    encerrarSessao = () =>{
        AuthService.removerMoradorAutenticado();
        AuthService.removerFuncionarioAutenticado();
        this.setState({isMoradorAutenticado:false, funcionarioAutenticado: null
            , isFuncionarioAutenticado:false, moradorAutenticado:null, nomemorador:'',nomefuncionario: ''});
    }

     getFuncionarioLogado = () =>{
         this.setState({funcionarioLogado: AuthService.obterFuncionarioAutenticado(),
         nomefuncionario: AuthService.obterFuncionarioAutenticado.nome});
     }

    isFuncionarioLogado = () =>{
        if(AuthService.isFuncionarioAutenticado()){
            this.setState({isAutenticado:true, funcionarioAutenticado: AuthService.obterFuncionarioAutenticado});
        }else{
            this.setState({isAutenticado:false, funcionarioAutenticado: null});
        }
    }
    isMoradorLogado = () =>{
        if(AuthService.isMoradorAutenticado()){
            this.setState({isAutenticado:true, moradorAutenticado: AuthService.obterMoradorAutenticado});
        }else{
            this.setState({isAutenticado:false, moradorAutenticado: null});
        }
    }
    render(){
        const contexto = {
            moradorAutenticado: this.state.moradorAutenticado,
            funcionarioAutenticado: this.state.funcionarioAutenticado,
            isMoradorAutenticado: this.state.isMoradorAutenticado,
            isFuncionarioAutenticado: this.state.isFuncionarioAutenticado,
            iniciarSessaoFuncionario: this.iniciarSessaoFuncionario,
            iniciarSessaoMorador: this.iniciarSessaoMorador,
            encerrarSessao: this.encerrarSessao,
            nomefuncionario: this.state.nomefuncionario,
            nomemorador: this.state.nomemorador
        }

        return(
            <AuthProvider value={contexto}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default ProvedorAutenticacao;