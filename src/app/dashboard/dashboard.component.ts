import { Component, OnInit } from '@angular/core';
import { IngreEgreService } from '../ingreso-egreso/ingre-egre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public _sInpoutService:IngreEgreService
  ) { }

  ngOnInit(): void {
    this._sInpoutService.initIngresoEgresoListener();
  }

}
