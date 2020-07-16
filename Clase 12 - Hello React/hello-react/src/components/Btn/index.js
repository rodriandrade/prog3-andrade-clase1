import React from 'react'

const BtnEmpleadoDelMes = props => {

    const {
        employeeId,
        handleEmpleadoMesClick
    } = props
 
    return (
        <button
            className='button is-info'
            onClick={()=>handleEmpleadoMesClick(employeeId)}
        >
            <span>Grammy</span>
        </button>
    )
}

export default BtnEmpleadoDelMes

