import { STATE } from "./state.enum";

export class ContactoA {
    name= '';
    lastname= '';
    email= '';
    state= STATE.true;

    constructor(name, lastname, email, state){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.state = state;
    }
}