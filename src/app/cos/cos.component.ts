import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent implements OnInit {

  cartItems: any;
  token: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('TOKEN') ?? '';
    this.getMyCartItems().subscribe((response) => {
      this.cartItems = response;
    }, (error) => {
      console.error(error);
    });
  }

  getMyCartItems(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'myToken': this.token
    });

    return this.http.get<any>('http://localhost:9060/rest/cart/my-cart', { headers });
  }
}

