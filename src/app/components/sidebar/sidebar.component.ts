import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketioService } from 'src/app/services/socketio.service';
import jwt_Decode from 'jwt-decode';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarios:any=[];
  suscription$:Subscription=new Subscription;
  token:any;

  constructor(private socket:SocketioService) {
    this.suscription$ = this.socket.on('broadcast-message').subscribe((userList:any)=>{
      console.log(userList);
      this.usuarios=userList;
    });
  }

  async ngOnInit(): Promise<void> {
    this.token = await jwt_Decode(localStorage.getItem('jwt'));
    let payload = {
      token:localStorage.getItem('jwt'),
      apiKey:environment.API_KEY,
      bandera:0
    }
    this.socket.emit('actualizarCorreo',payload);
    console.log(this.token);
  }

}
