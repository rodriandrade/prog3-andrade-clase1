import React from 'react'

const BtnEmpleadoDelMes = props => {

    const {
        employeeId,
        handleEmpleadoMesClick
    } = props
 
    return (
        <button
            className='button colorBtn'
            onClick={()=>handleEmpleadoMesClick(employeeId)}
        >
            <span className='icon is-small'>
                <i className='fas fa-award' />
            </span>
            <span>Grammy</span>
        </button>
    )
}

export default BtnEmpleadoDelMes

