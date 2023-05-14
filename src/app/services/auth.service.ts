import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser } from '../modelo/login-user';
import { jwtDto } from '../modelo/jwt-dto';
import { nuevoUsuario } from '../modelo/nuevo-usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: nuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: loginUser): Observable<jwtDto>{
    return this.httpClient.post<jwtDto>(this.authURL + 'login', loginUsuario);
  }
}
