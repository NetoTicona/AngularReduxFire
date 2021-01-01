import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { EstadoCompletoAplicaion } from '../app.reducer';
import { AuchService } from '../auth/auch.service';
import { IngrsoEgreso } from './estadistica/ingreso-egreso.model';

import { filter,map } from 'rxjs/operators'
import { SetItemsActionn, UnsetItemsActionn } from './inout.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngreEgreService {
  ingresoEgresoListerSubcription: Subscription = new Subscription();
  ingresoEgresoItemsSubcription: Subscription = new Subscription();

  constructor(
    private _afDB:AngularFirestore,
    public  _authServic:AuchService,
    private store:Store<EstadoCompletoAplicaion>

  ) { }

  initIngresoEgresoListener(){
    const user = this._authServic.getUsuario();
    //console.log('inoutlisterner: ', user );
   this.ingresoEgresoListerSubcription = this.store.select('auth').pipe(
      filter( a => a.user != null )
    )
    .subscribe( (u:any)=>{
      console.log('inoutlisterner: ', u );
      this.inoutItems( u.user.uid )
    } )
    
  }

  private inoutItems(uid){
  this.ingresoEgresoItemsSubcription =   this._afDB.collection(`${uid}/ingresos-egresos/items`)
    .snapshotChanges().pipe( 
      map( doc=>{

        return  doc.map(
          (d:any)=>{ 
            return {
              uid: d.payload.doc.id,
              ...d.payload.doc.data()
            }
           }
        )


      } )
    ).subscribe( (rpta)=>{
      console.log( 'items:', rpta );
      this.store.dispatch( new SetItemsActionn( rpta ) )
      
    } )
  }




  cancelarSubscriptions() {
    this.ingresoEgresoListerSubcription.unsubscribe();
    this.ingresoEgresoItemsSubcription.unsubscribe();
    this.store.dispatch( new UnsetItemsActionn() );
  }





  crearIngresoEgreso( ingresoEgreso:IngrsoEgreso ){
    const user = this._authServic.getUsuario();


    return this._afDB.doc(`${user.uid}/ingresos-egresos`).collection('items').add({...ingresoEgreso})



  }




borrarIngresoEgreso( uid:string ){
  const user = this._authServic.getUsuario();

  return this._afDB.doc(`${user.uid}/ingresos-egresos/${ uid }`).delete();

}




}
