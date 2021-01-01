//archivo tiene toda la definicion del estado


import { ActionReducerMap } from '@ngrx/store';
import * as fromUIR from './shared/userInterf.reducer';
import * as fromAuth from "./auth/auth.reducer";
import * as fromIngresoEgresoReducer from "./ingreso-egreso/inout.reducer";

export interface EstadoCompletoAplicaion {
    ui: fromUIR.StateUserInterf;
    auth:fromAuth.EstadoAuthenticacion;
    inout:fromIngresoEgresoReducer.IngresoEgresoEstadito
}


//configaracion global de reducers,LO mas redudante que eh visto
//esto me permite confgurar varios reducer en uno solo
export const aPPPREducers: ActionReducerMap<EstadoCompletoAplicaion>={
    ui: fromUIR.uIntReducer,
    auth:fromAuth.authReducer,
    inout:fromIngresoEgresoReducer.ingresoEgresoReducer
}


