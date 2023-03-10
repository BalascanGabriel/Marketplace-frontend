import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProduseComponent } from './produse/produse.component';
import { AdminProduseComponent } from './admin-produse/admin-produse.component';
import { FormsModule } from '@angular/forms';
import { AdminProdusViewComponent } from './admin-produs-view/admin-produs-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContComponent } from './cont/cont.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    ProduseComponent,
    AdminProduseComponent,
    AdminProdusViewComponent,
    ContComponent,
    LoginRegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
