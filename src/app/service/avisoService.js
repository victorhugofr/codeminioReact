import ApiService from '../apiservice'

class AvisoService extends ApiService {

  listar() {
    return this.get('/aviso');
  }

  salvar(idFuncionario, aviso) {
    console.log(aviso)
    return this.post('/funcionario/' + idFuncionario + '/aviso', aviso);
  }

}

export default AvisoService;
