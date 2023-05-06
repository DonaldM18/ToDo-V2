import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  _urlBase = environment.baseUrl

  constructor(private http: HttpClient) { }

  obtenerTodos(){

    return this.http.get(`${this._urlBase}/api/Tareas/GetAll`)

  }

}
