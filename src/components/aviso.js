import React from 'react'

class Aviso extends React.Component{
    render(){
        return(
            <div className="card md-7 mb-3">
                <h3 className="card-header">
                   Autor: {this.props.title}
                </h3>
                <div className="card-body" dangerouslySetInnerHTML={{ __html: this.props.children }}>
                </div>
            </div>
        )
    }
}

export default Aviso