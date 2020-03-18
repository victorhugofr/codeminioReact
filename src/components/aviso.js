import React, { Component } from 'react'

class Aviso extends Component {

  render() {
    return (
      <div className="card md-3" style={{
        marginBottom: "5px"
      }
      }>
        <h4 className="card-header" style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <span>{this.props.title}</span>
          <span>{this.props.dataCriacao}</span>
        </h4>
        <div className="card-body">
          {this.props.children}
        </div>
      </div >
    )
  }
}

export default Aviso;
