//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

//Services Imports
import { EntityService } from './services/entity.service';
import { DialogService } from './services/dialog.service';


//Components Imports
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

//Routing paths
const appRoutes: Routes = [

  {
    path: 'customer_files',
    component: CustomerDetailsComponent
  },
  {
    path: 'employee_files',
    component: EmployeeDetailsComponent
  },
  {
    path: 'add_customer',
    component: CustomerCreateComponent
  },
  {
    path: 'add_employee',
    component: EmployeeCreateComponent
  },
  {
    path: 'edit_customer/:id',
    component: CustomerEditComponent
  },
  {
    path: 'edit_employee/:id',
    component: EmployeeEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    EmployeeCreateComponent,
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatRadioModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule
  ],
  providers: [EntityService],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
