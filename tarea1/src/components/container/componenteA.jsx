import React from 'react'
import { ContactoA } from '../../models/contactoA.class';
import { STATE } from '../../models/state.enum';
import Componenteb from '../pure/forms/componenteb';


const ComponenteAComponent = () => {

    const defaultState = new ContactoA('Ramiro', 'Godoy', 'ejemplo@gmail.com', STATE,);
  return (
      <div>
          <div>
             <h1>Your state:</h1>
          </div>
          <Componenteb contacto={defaultState}></Componenteb>
      </div>
    
  )
}


export default ComponenteAComponent;
