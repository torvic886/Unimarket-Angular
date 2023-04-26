import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'http://localhost:8080/api/v1/Usuarios';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  get(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url+'/'+id);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.url, usuario);
  }

  delete(id:number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.url+'/'+id);
  }
}
