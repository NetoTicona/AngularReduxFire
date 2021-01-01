import * as fromINOUT from './inout.actions';
import { IngrsoEgreso } from './estadistica/ingreso-egreso.model'


export interface IngresoEgresoEstadito {
    items: IngrsoEgreso[]
}

const inoutIniState:IngresoEgresoEstadito = {
      items:[]  
}

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