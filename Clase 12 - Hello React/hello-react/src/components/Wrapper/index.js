import React from 'react';
import Card from '../Card';
import Avatar from '../Avatar';
import Name from '../Name';
import Genre from '../Genre';
import Button from '../Button';

const Wrapper = props => {
    
    const {employees, handleEmpleadoMesClick, empleadoDelMesID, handleRemoveEmployee, handleEditMusician} = props

    return (
        <div className="wrapperStyle">
            <div class="container">

            {
            employees.map((employee) => 
                <Card 
                    employeeData={employee} 
                    key={employee.id} 
                    handleEmpleadoMesClick={handleEmpleadoMesClick}
                    empleadoDelMesID={empleadoDelMesID}
                    handleRemoveEmployee = {handleRemoveEmployee}
                    handleEditMusician = {handleEditMusician}
                />) 
            }

            </div>
        </div>
    );
}

export default Wrapper;