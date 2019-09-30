import { Component, OnInit } from '@angular/core';
import { ServicesapiService } from '../servicesapi.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _api: ServicesapiService) { }
  users: any = [];
  ngOnInit() {
    this._api.getUsers().subscribe(data => {
      this.users = data;
    })
  }

}
