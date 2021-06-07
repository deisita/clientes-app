import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import { Plan } from './plan';
import { TipoIdentificacion } from './tipoIdentificacion';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string='http://localhost:8080/api/clientes';
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    //  return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=> response as Cliente[])
    );
  }

  getPlanes(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.urlEndPoint + '/planes');
  }

  getTiposIdentificacion(): Observable<TipoIdentificacion[]> {
    return this.http.get<TipoIdentificacion[]>(this.urlEndPoint + '/tiposIdentificacion');
  }


create(cliente: Cliente) : Observable<Cliente> {
  return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
}

getCliente(id: number): Observable<Cliente>{
  return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
}

update(cliente: Cliente): Observable<Cliente>{
  return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.numeroIdentificacion}`, cliente, {headers: this.httpHeaders})
}

delete(id: number): Observable<Cliente>{
  return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
}
}
