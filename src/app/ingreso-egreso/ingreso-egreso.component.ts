import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngrsoEgreso } from './estadistica/ingreso-egreso.model';
import { IngreEgreService } from './ingre-egre.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { EstadoCompletoAplicaion } from '../app.reducer';
import { Subscription } from 'rxjs';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/userInterf.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss'],
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  forma: FormGroup;
  tipo = 'ingreso';
  cargando: boolean;

  loadingSubs: Subscription = new Subscription();

  constructor(
    public _ingrEgrService: IngreEgreService,
    private store: Store<EstadoCompletoAplicaion>
  ) {}

  ngOnInit(): void {
    //escuchar cuando la aplicaion entra en estado de carga.
    this.loadingSubs = this.store.select('ui').subscribe((rpta) => {
      console.log('cambios: ' , rpta );
      
      this.cargando = rpta.isLoading;
    });

    this.forma = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      monto: new FormControl(0, Validators.min(0)),
    });
  }

  crearIngresoEgreso() {
    //-----ngrx-------//
    //activar el loading
    this.store.dispatch(new ActivarLoadingAction());
    //---------------//

    const ingresoEgreso = new IngrsoEgreso({
      ...this.forma.value,
      tipo: this.tipo,
    });

    this._ingrEgrService
      .crearIngresoEgreso(ingresoEgreso)
      .then((rpta) => {
        //-----ngrx-------//
        //desactivar el loading
        this.store.dispatch(new DesactivarLoadingAction());
        //---------------//
        Swal.fire({
          title: 'Ok!',
          text: 'Se guardo correctamente',
          icon: 'success',
          confirmButtonText: 'Xvr',
        });
      })
      .catch((err) => {
        //-----ngrx-------//
        //desactivar el loading
        this.store.dispatch(new DesactivarLoadingAction());
        //---------------//
        console.log(err);
      });
    this.forma.reset({ reset: 0 });
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }
}
