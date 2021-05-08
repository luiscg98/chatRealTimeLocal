import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private backend: BackendService, private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  registro(correo:string, contraseña:string, nombreCompleto:string){
    let body = {
      nombreCompleto,
      correo,
      contraseña
    }
    this.backend.registro('registro',body).subscribe((data:any)=>alert(data['msg']),(error:any)=>alert(error.error['msg']));
  }

  registro2(provider: string) {
    console.log('Provider: ', provider);
    this.authSvc.loginOAuth2(provider)
      .then((user: any) => {
        console.log(user);
        let body = {
          correo:user.email,
          nombreCompleto:user.displayName,
          fotoUrl:user.photoURL
        }
        this.backend.registro('registroOauth',body).subscribe((data:any)=>alert(data['msg']),(error:any)=>alert(error.error['msg']));
      })
      .catch((error) => {
        return {
          success: false,
          error
        }
      })
  }

}
