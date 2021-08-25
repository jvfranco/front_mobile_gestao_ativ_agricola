import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly PATH: string = 'auth';

  private storage: Storage;

  constructor(
    private http: HttpClient
  ) {
    this.storage = window.localStorage;
   }

   logar(login: Login) {
    return this.http.post<any>(env.baseUrl + this.PATH, login);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
