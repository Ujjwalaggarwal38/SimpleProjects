import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
const routes: Routes = [
  // {path : "",component : PostCustomerComponent},
  {path : "",component : GetAllCustomerComponent},
  {path : "customer/:id",component : UpdateCustomerComponent},
  // {path : "" , component : DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
