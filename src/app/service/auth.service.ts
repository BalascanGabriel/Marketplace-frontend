import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(name: string, username: string, email: string, password: string) {
    let obiectRegister = {
      email: email,
      username: username,
      password: password,
      name: name
    };
    console.log('new user: ', obiectRegister);
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = 'http://localhost:9060/rest/users/register';
 

    return this.http.post(url, obiectRegister);
  }

  login(username: string, password: string){
    let objUser = {
      username: username,
      password: password
    };

    const url = 'http://localhost:9060/rest/users/login';
    return this.http.post(url, objUser);
    
  }
  

    // console.log('loggin in with: ', objUser);
    // return fetch('http://localhost:9060/rest/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(objUser)
    // });
   
  logout(){
    // localStorage.removeItem('TOKEN');
    // this.router.navigate(['/']);
    // console.log('Disconected');
    // alert('You have been loged out');
  }
}
