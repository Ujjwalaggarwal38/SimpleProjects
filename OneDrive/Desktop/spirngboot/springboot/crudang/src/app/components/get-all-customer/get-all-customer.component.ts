import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../../service/customer.service';
import { PostCustomerComponent } from '../post-customer/post-customer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';


@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent {

customers : any = []

 constructor(private service: CustomerService, private dialog:MatDialog, private router : Router ) { }

 ngOnInit() {
 this.getAllCustomers();
 }

 getAllCustomers() {
  this.service.getAllCustomers().subscribe((res) => {console.log(res);
    this.customers = res;
  })
 }
 delteCustomer(id:number){
//  console.log(id);
 this.service.deleteCustomer(id).subscribe((res) => {console.log(res)
  this.getAllCustomers();
 })
 }

 Openpop(){
  var popoup = this.dialog.open(PostCustomerComponent,{
    // panelClass: 'dialog-overlay'
    width: '360px'
  });
  popoup.afterClosed().subscribe(() => {
    // console.log();
    this.getAllCustomers();})
 }

 openUpdatePopup(id: number) {
  const dialogRef = this.dialog.open(UpdateCustomerComponent, {
    width: '360px',
    data: { id: id }
  });

  dialogRef.afterClosed().subscribe(() => {
    this.getAllCustomers();
  });
}

}
