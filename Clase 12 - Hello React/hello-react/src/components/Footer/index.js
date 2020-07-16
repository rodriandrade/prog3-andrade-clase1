import React from 'react';
import Boton from '../Button';
import Fecha from '../Fecha'
import '../Footer/index.css'

const Footer = ( {texto, fecha} ) => {
    //const { texto, fecha } = props
    return(
        <footer className="App-Footer">
            <h2>{ texto }</h2>
            <Fecha fecha={fecha} />
            <Boton caption="Contactanos"/>
        </footer>
    )
}

export default Footer;