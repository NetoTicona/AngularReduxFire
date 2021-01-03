import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OrdencitoPipe } from './ordencito.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { dashboardRoutes } from '../dashboard/dashboard.routes';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './inout.reducer';
import { DashboardRutasModule } from '../dashboard/dashboard-rutas.module';



@NgModule({
  declarations: [
    DashboardComponent,
    EstadisticaComponent,
    IngresoEgresoComponent,
    DetalleComponent,
    OrdencitoPipe

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRutasModule ,
    StoreModule.forFeature( 'ingaEnge' , ingresoEgresoReducer )

    
  ]
})
export class IngresoEgresoModule { }
