import React from 'react';
import PropTypes from 'prop-types';
import { ContactoA } from '../../../models/contactoA.class';
import { STATE } from '../../../models/state.enum';


const Componenteb = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.name }
            </h2>
            <h3>
                Apellido: { contacto.lastname }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                Estado: { STATE.true ? 'Contacto en línea': 'Contacto No disponible' }
            </h5>
        </div>
    );
};


Componenteb.propTypes = {
    contacto: PropTypes.instanceOf(ContactoA)
};


export default Componenteb;
