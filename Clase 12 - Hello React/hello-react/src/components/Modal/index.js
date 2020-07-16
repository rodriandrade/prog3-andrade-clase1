import React from 'react';

const Modal = (props) =>{

    const {handleEditMusician} = props

    return(
     <div className='modal is-active'>
                        <div className='modal-background' />
                        <div className='modal-card'>
                            <header className='modal-card-head'>
                                <p className='modal-card-title'>Modal title</p>
                                <button className='delete' aria-label='close' />
                            </header>
                            <section className='modal-card-body'>
                                <form className='form-add-employee'>
                                    <input
                                        className='input'
                                        type='text'
                                    />
                                </form>
                            </section>
                        </div>
                    </div>
    )
}

export default Modal;