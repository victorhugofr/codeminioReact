import ApiService from '../apiservice'

class MoradorService extends ApiService{
    constructor(){
        super('/morador');
    }

    autenticar(credenciais){
        return this.post('/autenticar',credenciais);
    }

    salvar(funcionario){
        return this.post('/salvar', funcionario);
    }
}

export default MoradorService;