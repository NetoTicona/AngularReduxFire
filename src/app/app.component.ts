import { Component } from '@angular/core';
import { AuchService } from './auth/auch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inoutapp';
  constructor( public _authService:AuchService ){
    this._authService.initAuchService()
  }





}
