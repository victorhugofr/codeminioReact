import React from 'react'


export default(props)=>{
    const options = props.lista.map((option,index) => {
        return(
            <option key={index} value={option.id}>{option.nome}</option>
        )
    })
    return(
        <select {...props}>
            <option value="0">Selecione...</option>
            {options}
        </select>
    )
}