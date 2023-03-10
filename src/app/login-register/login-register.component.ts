import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  animations: [
    trigger('cardAnimation', [
      state('login', style({
        opacity: 1
      })),
      state('register', style({
        opacity: 1
      })),
      transition('login <=> register', [
        animate('300ms ease-out', style({ opacity: 0 })),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
    
  ]
})
export class LoginRegisterComponent implements OnInit {
  activeCard = 'login';

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.activeCard = this.activeCard === 'login' ? 'register' : 'login';
    console.log('Active Card:', this.activeCard);
}


}
