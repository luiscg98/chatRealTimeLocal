import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SocketioService } from 'src/app/services/socketio.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  token:any;

  constructor(private router: Router, private socket:SocketioService, private data: DataService) {
  }

  async ngOnInit(): Promise<void> {
  }

  async logout(){
    this.data.sendCriterio(false);
    this.socket.emit('logOut',{token:localStorage.getItem('jwt'),apikey:environment.API_KEY});
    await localStorage.removeItem('jwt');
    this.router.navigate(['../auth/login']);
  }


  revisarTokens(){
    this.token = localStorage.getItem('jwt');
  }


}
