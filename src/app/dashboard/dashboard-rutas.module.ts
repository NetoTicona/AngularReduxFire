import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';

const rutasDash:Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    //canActivate:[AuthGuardiaService] //array de conbdiciones
},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutasDash )
  ],
  exports:[
    RouterModule
  ],

})
export class DashboardRutasModule { }
