import ApiService from '../apiservice'

class MoradorService extends ApiService{
    constructor(){
        super('/morador');
    }

    autenticar(credenciais){
        return this.post('/autenticar',credenciais);
    }

    salvar(morador){
        return this.post('/salvar', morador);
    }
}

export default MoradorService;