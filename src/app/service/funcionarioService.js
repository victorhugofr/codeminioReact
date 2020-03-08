import ApiService from '../apiservice'

class FuncionarioService extends ApiService{
    constructor(){
        super('/funcionario');
    }

    autenticar(credenciais){
        return this.post('/autenticar',credenciais);
    }

    salvar(funcionario){
        return this.post('/salvar', funcionario);
    }
}

export default FuncionarioService;