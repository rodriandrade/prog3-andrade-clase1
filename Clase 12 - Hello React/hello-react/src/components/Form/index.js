import React from 'react';
import Button from '../Button';
import '../Form/index.css';

const Form = (props) =>{

    const {
      employeeName,
      handleAddEmployeeSubmit,
      handleAddEmployeeChange
    } = props

    return (
        <div>
          <form onSubmit={handleAddEmployeeSubmit} className='form-add-employee'>
            <input 
            className="input" 
            type="text" 
            placeholder="Add an Artist Name"
            value={employeeName}
            onChange={handleAddEmployeeChange}
            >
            </input>
            <button className='button is-success' type='submit'>
                Add Artist
            </button>
          </form>
        </div>
      );
    }
    
 export default Form;