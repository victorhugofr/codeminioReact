

export default class AuthService{

    static isMoradorAutenticado(){
        const morador = localStorage.getItem('morador_logado');
        if(morador){
            return true;
        }else{
            console.log(localStorage.getItem('morador_logado'));
           return false;
        }
    }

    static isFuncionarioAutenticado(){
        const funcionario = localStorage.getItem('funcionario_logado')
        if(funcionario){
            return true;
        }else{
           return false;
        }
    }

    static logarMorador(morador){
        localStorage.setItem('morador_logado',morador)
    }

    static logarFuncionario(funcionario){
        localStorage.setItem('funcionario_logado',funcionario)
    }

    static obterMoradorAutenticado(){
        return localStorage.getItem('morador_logado');
    }

    static obterFuncionarioAutenticado(){
        return localStorage.getItem('funcionario_logado');
    }
    static removerMoradorAutenticado(){
        localStorage.removeItem('morador_logado');
    }

    static removerFuncionarioAutenticado(){
        localStorage.removeItem('funcionario_logado');
    }

}