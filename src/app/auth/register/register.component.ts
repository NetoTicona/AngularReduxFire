import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoCompletoAplicaion } from 'src/app/app.reducer';
import { AuchService } from '../auch.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  cargando: boolean = false

  constructor(
    private _AuthService:AuchService,
    public store:Store<EstadoCompletoAplicaion>
  ) { }

  ngOnInit(): void {
    
    this.store.select('ui').subscribe( ui=>{

       this.cargando =  ui.isLoading

    } )

  }

  onSubmit(data){
    console.log('datos de Registro: ',data);
    this._AuthService.crearUser(data.nombre, data.email, data.password)
    
  }

}
