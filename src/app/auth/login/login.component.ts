import { Component, OnInit } from '@angular/core';
import { AuchService } from '../auch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _sAuchService:AuchService

  ) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    console.log( 'logeo data: ',  data  );
    this._sAuchService.login( data.email , data.password )
    
  }

}
