import { InitialState } from '@ngrx/store/src/models';
import * as fromUserInterfAk from './userInterf.actions';


//El estado(acciones del usuario) tendra varias banderas por ello sera objeto
export interface StateUserInterf{
    isLoading:boolean;

}

const iniState:StateUserInterf = {
    isLoading:false
}



export function uIntReducer( state=iniState , action: fromUserInterfAk.acciones  ):StateUserInterf{

    switch( action.type ){

        case fromUserInterfAk.ACTIVAR_LOADING:
            return{
                isLoading:true
            };

        case fromUserInterfAk.DESACTIVAR_LOADING:    
            return{
                //... si el estado tubiese mas propiedades
                isLoading:false
            }

        default:
            return state;



    }

}
