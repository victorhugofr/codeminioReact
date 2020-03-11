import React from 'react'
import {withRouter} from 'react-router-dom'

class IndexMorador extends React.Component{
    render(){
        return(
            <h4 className="mt-5">
                Bem-vindo!
            </h4>
        )
    }
}

export default withRouter( IndexMorador)