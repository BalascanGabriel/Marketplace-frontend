import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private mesajAscultat = new BehaviorSubject<any>('');

  constructor() { 

    console.log('CONSTRUCTOR LSS');
  }

  setItem(key: string, value: any){
    localStorage.setItem(key, value);
    this.mesajAscultat.next({
      key: key,
      operation: 'SET'
    });
  }
  removeItem(key: string){
    localStorage.removeItem(key);
    this.mesajAscultat.next({
      key: key,
      operation: 'REMOVE'
    });
  }

  getItem(key: string){
    return localStorage.getItem(key);
  }

  getMesajAscultat(): BehaviorSubject<any>{
    return this.mesajAscultat;
  }
}
