import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from './user.model';

import Swal from 'sweetalert2';
import * as firebase from 'firebase' // para saber lo que l firebase puede tner 
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuchService {
  constructor(
    public _sAuth: AngularFireAuth,
    public _afDB:AngularFirestore  ,
    private router: Router) {}

  crearUser(nombre: string, email: string, pass: string) {
    this._sAuth
      .createUserWithEmailAndPassword(email, pass)
      .then((data: any) => {
        console.log('la rpta: ', data);
        
        const user: User = {
          uid: data.user.uid,
          nombre: nombre,
          email: data.user.email,
        };
        console.log(' la data pal database:  ', user );
        
       

        this._afDB.doc(`${ user.uid }/usuario`)
        .set( user )
        .then( () => { 

          this.router.navigate(['/']);

        });







      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Error al crear usuario',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      });
  }

  login(email: string, password: string) {
    this._sAuth
      .signInWithEmailAndPassword(email, password)
      .then((data: any) => {
        console.log('la data del authLogin: ', data);

        this.router.navigate(['/']);
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Error en el login',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      });
  }




  logout(){
    this.router.navigate(['/login']);
    this._sAuth.signOut();

  }


initAuchService(){ //sollo se debe ejecutar una vez
  this._sAuth.authState.subscribe(( fbUser ) =>{
    // este un usuuario generico de firebase
    console.log('firebaseUseserr:::',fbUser);
    


  }  )
}

estaLogeado(){
  return  this._sAuth.authState.pipe(
    map( fbUser=>{

      if( fbUser == null ){
        this.router.navigate(['/login'])
      }

      return fbUser !=null

    } )
  )
}





}