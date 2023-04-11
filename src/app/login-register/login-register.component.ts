import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../service/auth.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { UserService } from '../service/user.service';

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

  usernameRegister: string = '';
  passwordRegister: string = '';
  emailRegister: string = '';
  nameRegister: string = '';

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent | undefined;

  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router, private localStorageService: LocalStorageService,
     private userService: UserService) { }

  ngOnInit(): void {
    console.log('NG ON INIT LOGIN/REGISTER');
  }

  ngAfterViewInit() {
    this.headerComponent?.updateToken();
  }
  

  toggleCard(): void {
    this.activeCard = this.activeCard === 'login' ? 'register' : 'login';
    console.log('Active Card:', this.activeCard);
  }

  register() {

    if(this.passwordRegister.length < 3){
      alert('invalid password, min 3');
      return;
    }
    this.authService.registerUser(this.nameRegister, this.usernameRegister, this.emailRegister, this.passwordRegister)
      .subscribe(datele => {
        console.log('datele sunt: ', datele);
        this.router.navigate(['/about'])
      },
        eroare => {
          console.log('eroare: ', eroare);
        }
      )
    // .then(datele => {if(!datele.ok){throw new Error('naspa')} return datele.json()})
    // .then(datele => {

    // console.log('raspunsul de la server: ', datele)
    //  }).catch(eroarea){ console.log('register failed')}
    //

  }

  login() {

    console.log('Loging in with : ', this.username + ' ' + this.password);

    this.authService.login(this.username, this.password)
      .subscribe((response: any) => {
        console.log('response from server: ', response);
        // localStorage.setItem('TOKEN', response);
        this.localStorageService.setItem('TOKEN', response.token);
        this.localStorageService.setItem('USERNAME', response.username);

        this.router.navigate(['/produse'])
        this.userService.setCurrentUser(this.username);
      }, (error: any) => {
        console.log('error component:', error);
      });
  
     
    }
  

}
