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
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './navbar/navbar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { UserService } from './service/user.service';

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
    CosComponent,
    HomeComponent,
    NavbarComponent,
    WishlistComponent,
    UserInformationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [TokenGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
