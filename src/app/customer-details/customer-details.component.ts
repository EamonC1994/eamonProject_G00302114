import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

//Import Data Model
import { Customer } from '../customer.model';


//Import Services
import { EntityService } from '../services/entity.service';
import { DialogService } from '../services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  //variables
  customers: any = [];

  constructor(private service: EntityService, private dialogService: DialogService) { }

  //Reads customer data from service and puts in variable
  ngOnInit() {

    this.service.getCustomersData().subscribe(data => {
      this.customers = data;
    });
  }

  //Deletes entry from database via id
  onDeleteCust(id: String) {
    this.dialogService.openConfirmDialog("Permanently delete record from database?")
    //Contains observable and subscribes to response  
    .afterClosed().subscribe(res => {
        //Logs response
        console.log(res);
        //If response returns true deletes entry from database via service
        if (res) {
          console.log("Delete called " + id);
          this.service.deleteCustomer(id).subscribe(() => {
            this.ngOnInit();
          })
        }
      });
  }
}
