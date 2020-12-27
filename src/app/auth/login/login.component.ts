import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoCompletoAplicaion } from 'src/app/app.reducer';
import { AuchService } from '../auch.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  cargando :boolean;
  suscribida:Subscription; //lamara al on subscribe cuando se destruye el componente

  constructor(
    private _sAuchService:AuchService,
    private SStore:Store<EstadoCompletoAplicaion>

  ) { }

  ngOnInit(): void {
    
    this.suscribida =  this.SStore.select('ui').subscribe( (r)=>{
      this.cargando = r.isLoading;
    } )


  }

  onSubmit(data:any){
    console.log( 'logeo data: ',  data  );
    this._sAuchService.login( data.email , data.password )
    
  }

  ngOnDestroy(){
    this.suscribida.unsubscribe();
  } 

}
