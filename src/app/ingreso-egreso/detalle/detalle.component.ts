import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoCompletoAplicaion } from 'src/app/app.reducer';
import { IngrsoEgreso } from '../estadistica/ingreso-egreso.model';
import { IngresoEgresoComponent } from '../ingreso-egreso.component';
import Swal from 'sweetalert2';
import { IngreEgreService } from '../ingre-egre.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {
  items:IngrsoEgreso[];
  subscription: Subscription = new Subscription();

  constructor(
    private store:Store<EstadoCompletoAplicaion>,
    public ingesoEgresoService:IngreEgreService
  ) { }

  ngOnInit(): void {
   this.subscription = this.store.select('inout').subscribe( (inout:any)=>{
      console.log('objeto inpout del storage',inout);
      this.items = inout.items
    } )


  }


  clearItem( item ){

    this.ingesoEgresoService.borrarIngresoEgreso( item.uid ).then((r)=>{}).catch((err)=>{
      Swal.fire({
        title: 'Ok!',
        text: 'Se Borro correctamente',
        icon: 'success',
        confirmButtonText: 'Xvr',
      });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
