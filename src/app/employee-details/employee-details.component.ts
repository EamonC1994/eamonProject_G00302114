import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

//Import Services
import { EntityService } from '../services/entity.service';
import { DialogService } from '../services/dialog.service';

//Import Data Model
import { Employee } from '../employee.model';

import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  //variables
  employees: any = [];

  constructor(private entity: EntityService, private dialogService: DialogService) { }

  //Reads customer data from service and puts in variable
  ngOnInit() {

    this.entity.getEmployeesData().subscribe(data => {
      this.employees = data;
    });
  }

  //Deletes entry from database via id
  onDeleteEmp(id: String) {
    this.dialogService.openConfirmDialog("Permanently delete record from database?")
    //Contains observable and subscribes to response
    .afterClosed().subscribe(res => {
        //Logs response
        console.log(res);
        //If response returns true deletes entry from database via service
        if (res) {
          console.log("Delete called " + id);
          this.entity.deleteEmployee(id).subscribe(() => {
            this.ngOnInit();
          })
        }
      });
  }
}

