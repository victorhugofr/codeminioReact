import React from 'react'
import AuthService from '../app/service/authService'

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component{
    state={
        moradorAutenticado: null,
        isAutenticado: false
    }

    iniciarSessao = (morador) =>{
        AuthService.logar(morador);
        this.setState({isAutenticado:true, moradorAutenticado: morador});
    }

    encerrarSessao = () =>{
        AuthService.removerMoradorAutenticado();
        this.setState({isAutenticado:false, moradorAutenticado: null});
    }
    render(){
        const contexto = {
            usuarioAutenticado: this.state.usuarioAutenticado,
            isAutenticado: this.state.isAutenticado,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao
        }
        return(
            <AuthProvider value={contexto}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default ProvedorAutenticacao;