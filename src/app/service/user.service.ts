import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: string | null = null;

  constructor() { }

  public setCurrentUser(name: string): void {
    console.log(`Setting currentUser to ${name}`);
    this.currentUser = name;
    console.log(`currentUser is now ${this.currentUser}`);
  }

  public getCurrentUser(): string | null {
    console.log(`Returning currentUser ${this.currentUser}`);
    return this.currentUser;
  }
}






