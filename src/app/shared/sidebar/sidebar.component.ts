import { Component, OnInit } from '@angular/core';
import { AuchService } from 'src/app/auth/auch.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _sAuthService:AuchService

  ) { }

  ngOnInit(): void {
  }



  logout() {

    this._sAuthService.logout();
  }

}
