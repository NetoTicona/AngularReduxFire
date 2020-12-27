//archivo tiene toda la definicion del estado


import { ActionReducerMap } from '@ngrx/store';
import * as fromUIR from './shared/userInterf.reducer';

export interface EstadoCompletoAplicaion {
    ui: fromUIR.StateUserInterf;
}


//configaracion global de reducers,LO mas redudante que eh visto
//esto me permite confgurar varios reducer en uno solo
export const aPPPREducers: ActionReducerMap<EstadoCompletoAplicaion>={
    ui: fromUIR.uIntReducer
}


