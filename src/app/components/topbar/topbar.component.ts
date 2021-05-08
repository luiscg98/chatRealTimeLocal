import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faSortDown } from '@fortawesome/free-solid-svg-icons' ;
import { DataService } from 'src/app/services/data.service';
import { SocketioService } from 'src/app/services/socketio.service';
import {environment} from '../../../environments/environment';
import jwt_Decode from 'jwt-decode';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  faUser=faUser;
  faSortDown=faSortDown;
  token:any;

  constructor(private router: Router, private data:DataService, private socket:SocketioService) { }

  async ngOnInit(): Promise<void> {
    this.token = await jwt_Decode(localStorage.getItem('jwt'));
  }

}
