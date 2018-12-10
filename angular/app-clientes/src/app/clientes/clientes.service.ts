import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map(response => response as Cliente[]));
  }
}
