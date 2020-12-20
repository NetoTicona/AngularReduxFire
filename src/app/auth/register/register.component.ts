import { Component, OnInit } from '@angular/core';
import { AuchService } from '../auch.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _AuthService:AuchService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log('datos de Registro: ',data);
    this._AuthService.crearUser(data.nombre, data.email, data.password)
    
  }

}
