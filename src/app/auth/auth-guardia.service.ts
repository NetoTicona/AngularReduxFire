import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { AuchService } from './auch.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardiaService implements CanActivate {

  constructor(
    private router :Router,
    private _AuchService:AuchService

  ) { }

  canActivate(){
      return this._AuchService.estaLogeado();


  }


}
