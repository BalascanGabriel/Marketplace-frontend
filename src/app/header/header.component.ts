import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  myToken: string|null = null;

  constructor(private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.updateToken();
  }

  updateToken(): void {
    this.myToken = localStorage.getItem('TOKEN');
    this.cdr.detectChanges(); // force a re-render

  }

}
