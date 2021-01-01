
import * as frommAuchh from './auth.actions';
import { User } from './user.model';

//interfaz
export interface EstadoAuthenticacion{
    user:User;
}

//estado inicial
const estadoAuthInicial: EstadoAuthenticacion = {
    user:null
};

//creamos el reucer, que debe regresar algo de tipo authState
export function authReducer( state=estadoAuthInicial  , action:frommAuchh.acciones ):EstadoAuthenticacion {
    switch( action.type ){
        case frommAuchh.SET_USSER:
            return { 
                user:{
                    ... action.userr
                }
             }

        case frommAuchh.UNSET_USER:
            return{
                user:null
            }     
        default:
            return state     
    }
}











