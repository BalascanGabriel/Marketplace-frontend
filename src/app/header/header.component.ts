import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myToken: string | null = null;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private auth: AuthService
    , private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
    console.log('NG ON INIT HEADER');
    this.updateToken();
    // console.log('TOKEN: ', localStorage.getItem('TOKEN'));
    // this.localStorageService.subscribe();
    this.localStorageService.getMesajAscultat().subscribe(rez => {
      console.log('CEVA S-A INTAMPLAT IN LOCAL STORAGE: ', rez);
      /*
      {
      key: key,
      operation: 'SET'
    }
    {
      key: key,
      operation: 'REMOVE'
    }
      */
      if(rez.key == 'TOKEN'){
        if(rez.operation == 'SET'){
          this.myToken = localStorage.getItem('TOKEN');
        }else if(rez.operation == 'REMOVE'){
          this.myToken = null;
        }
        console.log('SCHIMBARE DE TOKEN!!!!!');
        
      }
    });
  }

  updateToken(): void {
    this.myToken = localStorage.getItem('TOKEN');
    this.cdr.detectChanges(); // force a re-render

  }

  logout() {


    //this.auth.logout();
    // localStorage.removeItem('TOKEN');
    this.localStorageService.removeItem('TOKEN');
    this.router.navigate(['/']);
    console.log('Disconected');
    alert('You have been loged out');
  }

}
