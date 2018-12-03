import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EntityService } from '../services/entity.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private service: EntityService) { }

  //Receives form data and adds a new customer via the service
  onAddCustomer(form: NgForm) {

    this.service.addCustomer(form.value.custName, form.value.custEmail, form.value.custNum).subscribe();

    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {



  }

}
