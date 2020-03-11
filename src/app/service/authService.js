

export default class AuthService{

    static isMoradorAutenticado(){
        console.log(localStorage.getItem('morador_logado')+'aa');
        const morador = localStorage.getItem('morador_logado')
        if(morador){
            return true;
        }else{
            console.log(localStorage.getItem('morador_logado')+'aa');
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

    static logar(morador){
        localStorage.setItem('morador_logado',morador)
    }

    static obterMoradorAutenticado(){
        return localStorage.getItem('morador_logado');
    }
    static removerMoradorAutenticado(){
        localStorage.removeItem('morador_logado');
    }

    static removerFuncionarioAutenticado(){
        localStorage.removeItem('funcionario_logado');
    }

}