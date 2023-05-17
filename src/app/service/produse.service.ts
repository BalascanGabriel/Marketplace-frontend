import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProduseService {


  serverContextPath : string = 'http://localhost:9060';

  constructor() { }

  //   findAll() :Product[] {
  findAll() {

    let token = '';
    let localToken = localStorage.getItem('TOKEN');
    token = localToken ? localToken : '';



    return fetch(`${this.serverContextPath}/rest-secured/product/all`, {
      headers: {
        'myToken' : token
      }
    })
  }

  findAllPaginare(nrPagina: number, elementePagina: number) {

    let token = '';
    let localToken = localStorage.getItem('TOKEN');
    token = localToken ? localToken : '';

    return fetch(`${this.serverContextPath}/rest-secured/product/all-paginare/${nrPagina}/${elementePagina}`, {
      headers: {
        'myToken' : token
      }
    })
  }
  
  save(product: Product) {
    let myToken =  localStorage.getItem('TOKEN') || '';

    return fetch(`${this.serverContextPath}/rest-secured/product/save`, {
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
    return fetch(`${this.serverContextPath}/rest-secured/product/delete/${productId}`  , {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  findById(id: number) {
    return fetch(`${this.serverContextPath}/rest-secured/product/by-id/${id}`)

  }

  addProductToCart(product : Product){
    let myTokenLS : string | null = localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : '';
    let myToken: string = myTokenLS ? myTokenLS : '';
    return fetch(`${this.serverContextPath}/rest-secured/product/add-to-cart`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'myToken' : myToken
      }, 
      body: JSON.stringify(product)
    })
  }
}
