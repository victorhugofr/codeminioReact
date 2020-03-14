import ApiService from '../apiservice'

class FuncionarioService extends ApiService{
    constructor(){
        super('/funcionario');
    }

    autenticar(credenciais){
        return this.post('/autenticar',credenciais);
    }

    listar(){
        return this.get('/listar');
    }
    salvar(funcionario){
        return this.post('/salvar', funcionario);
    }
}

export default FuncionarioService;