import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AllEmployeeListComponent } from './Employee/all-employee-list/all-employee-list.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogActions, MatDialogModule} from '@angular/material/dialog';
import { EmployeeDeleteDialogComponent } from './Dialog/employee-delete-dialog/employee-delete-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { EditableTableComponent } from './Employee/editable-table/editable-table.component';
import { CongirmDialogComponent } from './Dialog/congirm-dialog/congirm-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AllEmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeDeleteDialogComponent,
    EditableTableComponent,
    CongirmDialogComponent
  ],
  entryComponents:[
    EmployeeDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,  
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
