import React, { Component } from 'react'

import { AuthContext } from '../../main/provedorAutenticacao'

import Aviso from '../../components/aviso';

import { httpClient } from '../../app/apiservice';

class IndexMorador extends Component {

  constructor() {
    super();

    this.state = {
      avisos: [],
    }
  }

  async componentDidMount() {

    const { data } = await httpClient.get("/aviso");

    console.log(data)

    this.setState(() => {
      return { avisos: data }
    })
  }

  render() {

    const { avisos } = this.state;

    return (
      <>
        <h4 className="mt-5">
          Seja bem-vindo, {this.context.moradorAutenticado}!!
        </h4>

        {avisos.map((aviso) => (
          <Aviso key={aviso.id} title={aviso.autor.nome} dataCriacao={aviso.dataCriacao}>
            {aviso.texto}
          </Aviso>
        ))}
      </>
    )
  }
}

IndexMorador.contextType = AuthContext

export default IndexMorador;
