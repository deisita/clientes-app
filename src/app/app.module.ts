import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormClienteComponent } from './clientes/form-cliente.component';
import {FormsModule} from '@angular/forms';

const routes: Routes=[
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'directivas', component: DirectivaComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'form-cliente', component: FormClienteComponent},
  {path:'form-cliente/:id', component: FormClienteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
