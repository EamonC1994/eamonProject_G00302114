import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';

import { NgForm } from "@angular/forms";

//Import Service
import { EntityService } from '../services/entity.service';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  //variables
  customer: any = [];
  myCustName: String;
  myCustEmail: String;
  myCustNum: String;

  constructor(private router: Router, private route: ActivatedRoute, private service: EntityService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getCustomer(this.route.snapshot.params['id']).subscribe(data => {
      this.customer = data;
      console.log(this.customer);
      this.myCustName = this.customer.custName;
      console.log("message" + this.myCustName);

    });
  }

  //Sends update to the service and then navigates back to the customer_files route
  onEditCustomer(form: NgForm) {
    this.service.updateCustomer(this.customer._id, form.value.custName, form.value.custEmail, form.value.custNum).subscribe(() => {
      this.router.navigate(['/customer_files']);
    });
  }

}
