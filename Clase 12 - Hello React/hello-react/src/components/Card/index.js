import React from 'react';
import Avatar from '../Avatar';
import Name from '../Name';
import Genre from '../Genre';
import Button from '../Button';
import BtnEmpleadoDelMes from '../Btn';
import '../Card/index.css';

const Card = (props) => {

    const {employeeData, handleEmpleadoMesClick, empleadoDelMesID, handleRemoveEmployee, handleEditMusician} = props
    const {name, genre, id, avatar} = employeeData;
    const isMonthEmployee = empleadoDelMesID === id

    return (
      
      <div className={`containerCard ${isMonthEmployee ? 'bg-yellow' : ''}`}>

        <div className="artistProfile">
          <div className="avatarCont">
            <Avatar avatar={avatar}/>
          </div>

          <div className="artistDataCont">
            <Name name={name}/>
            <Genre genre={genre}/>
          </div>
        </div>
        
        <div className="btnContainer">
        {/*    <Button className="button is-primary" caption="Editar"/> */}

            <button onClick = { () => handleEditMusician(employeeData) } className="button is-primary">Edit</button>
            <button onClick = { () => handleRemoveEmployee(id) } className="button is-danger">Delete</button>

            {!isMonthEmployee && 
              <BtnEmpleadoDelMes className="button is-info is-outlined" employeeId={id} handleEmpleadoMesClick={handleEmpleadoMesClick} caption="Artista del mes"/>
            }

        </div>

      </div>

    )
}

export default Card;