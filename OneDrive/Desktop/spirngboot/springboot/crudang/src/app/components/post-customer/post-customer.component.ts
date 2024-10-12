import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent implements OnInit {

postCustomerForm! : FormGroup;

  constructor(private customerService : CustomerService,private fb: FormBuilder,private router :Router,private ref : MatDialogRef<PostCustomerComponent>){
  }

  ngOnInit() {
 this.postCustomerForm = this.fb.group({
  name: [null,Validators.required],
  email: [null,[Validators.required,Validators.email]],
  phone: [null,[Validators.required, Validators.pattern(/^\d{10}$/)]],

 });
  }


  postCustomer(){
    // console.log(this.postCustomerForm.value)
    // this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res) => {console.log(res);
    //   this.router.navigateByUrl('');
    if (this.postCustomerForm.valid) {
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res) => {
        console.log(res);
        this.ref.close();
        // this.router.navigateByUrl("");


      });
  }
  }}
