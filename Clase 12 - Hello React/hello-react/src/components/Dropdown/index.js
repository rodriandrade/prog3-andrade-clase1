import React from 'react';
import '../Dropdown/index.css';

const Dropdown = (props) =>{

    const {
      handleGenreChange,
      handleRemoveSelectedGenre,
      selectedGenre
    } = props

    return (
        
      <div className="mainCont">
        <div className="contDrop">
            <select onChange={handleGenreChange} className="dropdown">
                <option id="default" value="" hidden>Select Genre</option>
                <option value="Uplifting Trance">Uplifting Trance</option>
                <option value="Progressive Trance">Progressive Trance</option>
                <option value="Techno">Techno</option>
                <option value="Deep House">Deep House</option>
                <option value="Progressive House">Progressive House</option>
                <option value="Pop & Rock">Pop & Rock</option>
                <option value="Drum 'n' Bass">Drum 'n' Bass</option>
                <option value="Synth Pop">Synth Pop</option>
                <option value="Electrónica">Electrónica</option>
                <option value="Rock">Rock</option>
                <option value="Metal">Metal</option>
            </select>

            {selectedGenre && (
                <button
                    className='button'
                    aria-haspopup='true'
                    aria-controls='dropdown-menu'
                    onClick={handleRemoveSelectedGenre}
                    style={{ marginLeft: '15px' }}
                >
                    <span>{selectedGenre}</span>
                    <span className='icon is-small' >
                        <i className='fas fa-trash-alt' />
                    </span>
                </button>
            )}
          </div>
        </div>
      );
}
      
 export default Dropdown;