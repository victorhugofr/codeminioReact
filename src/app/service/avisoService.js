import ApiService from '../apiservice'

class AvisoService extends ApiService{
    constructor(){
        super('/');
    }

    mostrar(){
        return this.post('/autenticar',credenciais);
    }

    salvar(idFuncionario, aviso){
        return this.post('/salvar', idFuncionario,aviso);
    }

}

export default AvisoService;