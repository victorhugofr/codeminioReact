import React from 'react'
import { withRouter } from 'react-router-dom'

class AcessoNegado extends React.Component {
  render() {
    return (
      <h4 className="mt-5">
        Você não tem acesso a essa página =(
      </h4>
    )
  }
}

export default withRouter(AcessoNegado)
