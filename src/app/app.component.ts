import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';
import { SocketioService } from './services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'chatRealTime';
  suscription$:Subscription;
  listaUsuarios:any[];
  auth:boolean = false;
  token:any;

  constructor(public socket:SocketioService, private data:DataService){
  }

  async ngOnInit():Promise<void>{
    await this.revisarToken();
    if(this.token!=undefined)
    this.auth=true;

    this.suscription$ = this.data.onListenCriterio().subscribe((data:boolean) => this.auth = data);
  }

  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }

  revisarToken(){
    this.token = localStorage.getItem('jwt');
  }
}
