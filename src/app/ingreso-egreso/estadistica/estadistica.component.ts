import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EstadoCompletoAplicaion } from 'src/app/app.reducer';
import { ChartType } from 'chart.js';
import * as IngreEgreStateReducer from "../inout.reducer"

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {

  ingresos:number;
  egresos:number;

  cuantosIngresos:number;
  cuantosEgresos:number;

  laSuscrbida:Subscription = new Subscription();

  public dinaCartLAbel: string[] = [ 'Ingresos','Egresos' ];
  public donacartData:number[] = [];
  public doughnutChartType: ChartType = 'doughnut';


  constructor(
    private store:Store< IngreEgreStateReducer.InouTState >
  ) { }

  ngOnInit(): void {
    this.laSuscrbida = this.store.select('ingaEnge').subscribe( (r)=>{
      this.conteoInouts( r.items )

      console.log('r.items: ',r.items );
      
    } )

  }

conteoInouts( items ){
  this.ingresos = 0;
  this.egresos = 0;

  this.cuantosEgresos = 0;
  this.cuantosIngresos = 0;

  items.forEach(element => {
  
      if( element.tipo === "ingreso" ){
        this.cuantosIngresos++
        this.ingresos += element.monto;
      }else{
        this.cuantosEgresos++
        this.egresos += element.monto
      }


  });

  this.donacartData = [ this.ingresos , this.egresos ]

}


















}
