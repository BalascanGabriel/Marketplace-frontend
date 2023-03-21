import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(name: string, username: string, email: string, password: string, date_added: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = 'http://localhost:9060/rest/users/register';
    const body = {
      'name': name,
      'username': username,
      'email': email,
      'password': password,
      'date_added': date_added
    };

    return this.http.post(url, JSON.stringify(body), { headers: headers });
  }

  login(username: string, password: string){
    let objUser = {
      username: username,
      password: password
    };
    console.log('loggin in with: ', objUser);
    return fetch('http://localhost:9060/rest/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objUser)
    })
  }
}
