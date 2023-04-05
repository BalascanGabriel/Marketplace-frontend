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
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HttpClientModule } from '@angular/common/http';
import { CosComponent } from './cos/cos.component';
import { TokenGuard } from './service/TokenGuard';

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
    LoginRegisterComponent,
    CosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
