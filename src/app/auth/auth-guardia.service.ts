import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router'
import { take } from 'rxjs/operators';
import { AuchService } from './auch.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardiaService implements CanActivate, CanLoad {

  constructor(
    private router :Router,
    private _AuchService:AuchService

  ) { }

  canActivate(){
      return this._AuchService.estaLogeado();


  }

  canLoad(){
    return this._AuchService.estaLogeado().pipe( take(1) )

  }


}
