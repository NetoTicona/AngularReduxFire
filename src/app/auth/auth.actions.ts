import  { Action } from '@ngrx/store';
import {User} from './user.model'


export const SET_USSER = '[Auth] Set User'; //esta es la aaciion que uno tienew que llamar y mandar el respectivo abjeto yipo user.

//creamos la clase para crear acciones de este tipo:
export class SetUserAction implements Action {
    readonly type = SET_USSER;

    //necesita recibir un objeto usuario

    constructor( public userr:User ){

    }

}

export type acciones = SetUserAction