import * as fromINOUT from './inout.actions';
import { IngrsoEgreso } from './estadistica/ingreso-egreso.model'
import { EstadoCompletoAplicaion } from '../app.reducer';


export interface IngresoEgresoEstadito {
    items: IngrsoEgreso[]
}

const inoutIniState:IngresoEgresoEstadito = {
      items:[]  
}


//-------------aparece reducer ------//

export interface InouTState extends EstadoCompletoAplicaion {
    ingaEnge:IngresoEgresoEstadito
}

//------------------------------------//
export function ingresoEgresoReducer( state = inoutIniState, action:fromINOUT.acciones  ) :IngresoEgresoEstadito {

    switch( action.type ) {

        case fromINOUT.SET_ITEMS:
            return {
                items:[ //firbase me estara regresando todos los items
                    ...action.items.map( (item)=>{ return{...item}  } )
                ]
            }


         case fromINOUT.UNSET_ITEMS:
             return {
                 items:[]
             }   

          default:
              return state;   

    }




}