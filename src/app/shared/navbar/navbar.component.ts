import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EstadoCompletoAplicaion } from 'src/app/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  nombre: string;
  subscription: Subscription = new Subscription();

  constructor(
    private store:Store<EstadoCompletoAplicaion>
  ) { }

  ngOnInit(): void {
    this.store.select('auth').pipe(
      filter( auth => auth.user !== null )
    ).subscribe( ( auth )=>{
      this.nombre = auth.user.nombre
    } )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
