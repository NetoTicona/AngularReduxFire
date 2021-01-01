import { IngrsoEgreso } from "./estadistica/ingreso-egreso.model";
import { Action } from '@ngrx/store';


export const SET_ITEMS ='[Ingreso-greso] Set Items';
export const UNSET_ITEMS = '[Ingreso-egreso] Unset Items';

export class SetItemsActionn implements Action{
    readonly type = SET_ITEMS;

    constructor( public items:IngrsoEgreso[] ){

    }
}

export class UnsetItemsActionn implements Action {
    readonly type = UNSET_ITEMS;
}




export type acciones = SetItemsActionn | UnsetItemsActionn




