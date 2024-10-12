import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  updateCustomerForm!: FormGroup;

  id:number = this.activatedRoute.snapshot.params["id"];

 constructor(private activatedRoute:ActivatedRoute,private service : CustomerService, private fb: FormBuilder, private router: Router,public dialogRef: MatDialogRef<UpdateCustomerComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any ){
    this.id=data.id;
  }

 ngOnInit(){
  this.updateCustomerForm = this.fb.group({
    name: [null,Validators.required],
    email: [null,[Validators.required,Validators.email]],
    phone: [null,[Validators.required, Validators.pattern(/^\d{10}$/)]],

   });
  this.getCustomerById()
 }
 getCustomerById(){
  this.service.getCustomerById(this.id).subscribe((res) => {
    console.log(res);
    this.updateCustomerForm.patchValue(res);
  })}

  updateCustomer(){
    this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((res) =>{
      console.log(res);
      this.dialogRef.close();
      this.router.navigateByUrl("");

    })
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
