import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { cpuUsage } from 'process';
import { AllEmployeeListComponent } from './Employee/all-employee-list/all-employee-list.component';
import { EditableTableComponent } from './Employee/editable-table/editable-table.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';

const routes: Routes = [
  { path: '',   redirectTo: '/editable-table', pathMatch: 'full' },
  { path: "all-employee", component: AllEmployeeListComponent },
  { path: "editable-table", component: EditableTableComponent },
  { path: "edit-employee/:employeeId", component: EmployeeDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
