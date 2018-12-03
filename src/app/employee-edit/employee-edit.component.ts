import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';

//Import Service
import { EntityService } from '../services/entity.service';

import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  //variables
  employee: any = [];
  myEmpNum: String;
  myEmpName: String;
  myEmpJobTitle: String;

  constructor(private router: Router, private route: ActivatedRoute, private service: EntityService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getEmployee(this.route.snapshot.params['id']).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
      this.myEmpNum = this.employee.empNum;
      console.log("message" + this.myEmpNum);

    });
  }

  //Sends update to the service and then navigates back to the employee_files route
  onEditEmployee(form: NgForm) {
    this.service.updateEmployee(this.employee._id, form.value.empNum, form.value.empName, form.value.empJobTitle).subscribe(() => {
      this.router.navigate(['/employee_files']);
    });
  }


}