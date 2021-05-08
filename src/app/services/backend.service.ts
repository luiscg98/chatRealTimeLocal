import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url='http://apinode.midominio.com/api'

  constructor(private http:HttpClient) { }

  registro(ruta:string,body:any){
    return this.http.post(`${this.url}/${ruta}`, body)
  }
}
