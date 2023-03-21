import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProduseService {

  constructor() { }

  //   findAll() :Product[] {
  findAll() {
    return fetch('http://localhost:9060/rest/product/all')
  }
  
  save(product: Product) {
    let myToken =  localStorage.getItem('TOKEN') || '';

    return fetch('http://localhost:9060/rest/product/save', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'myToken': myToken
      },
      body: JSON.stringify(product)
    })
  }

  remove(productId: number) {
    return fetch('http://localhost:9060/rest/product/delete/' + productId, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  findById(id: number) {
    return fetch('http://localhost:9060/rest/product/by-id/' + id)

  }
}
