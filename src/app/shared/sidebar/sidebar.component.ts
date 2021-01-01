import { Component, OnInit } from '@angular/core';
import { AuchService } from 'src/app/auth/auch.service';
import { IngreEgreService } from 'src/app/ingreso-egreso/ingre-egre.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _sAuthService:AuchService,
    private _inputService:IngreEgreService

  ) { }

  ngOnInit(): void {
  }



  logout() {

    this._sAuthService.logout();
    this._inputService.cancelarSubscriptions();
  }

}
