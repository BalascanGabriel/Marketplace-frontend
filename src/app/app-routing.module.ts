import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminProdusViewComponent } from './admin-produs-view/admin-produs-view.component';
import { AdminProduseComponent } from './admin-produse/admin-produse.component';
import { ContComponent } from './cont/cont.component';
import { ContactComponent } from './contact/contact.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProduseComponent } from './produse/produse.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'produse',
    component: ProduseComponent
  },{
    path: 'admin-produse',
    component: AdminProduseComponent
  },{
    path: 'admin-produs-view/:idProdus',
    component: AdminProdusViewComponent
  },{
    path: 'cont',
    component: ContComponent
  }
  ,{
    path: 'login-register',
    component: LoginRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
