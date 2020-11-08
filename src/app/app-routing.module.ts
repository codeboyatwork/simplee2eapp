import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'contacts',component:ContactsComponent},
  // {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
