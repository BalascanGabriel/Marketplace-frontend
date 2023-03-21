import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../service/auth.service';

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
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.activeCard = this.activeCard === 'login' ? 'register' : 'login';
    console.log('Active Card:', this.activeCard);
  }

  login() {
    
    
   this.authService.login(this.username, this.password).then(raspuns => {
      if (raspuns.ok) {
        return raspuns.text();
      }
      throw new Error('Something went wrong');
    }).then(raspuns => {
      // numai daca nu Error thrown de mai sus
      console.log('raspuns server: ', raspuns);
      localStorage.setItem('TOKEN', raspuns);
    }).catch(eroare => {
      console.log('eroare: ', eroare);
    });
  }


}
