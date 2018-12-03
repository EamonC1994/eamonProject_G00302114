import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EntityService } from '../services/entity.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private service: EntityService) { }

  //Receives form data and adds a new customer via the service
  onAddEmployee(form: NgForm) {

    this.service.addEmployee(form.value.empNum, form.value.empName, form.value.empJobTitle).subscribe();

    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}

