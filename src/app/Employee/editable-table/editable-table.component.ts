import { CongirmDialogComponent } from './../../Dialog/congirm-dialog/congirm-dialog.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeTable } from 'src/app/Models/EmployeeTable';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})

export class EditableTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'EmployeeName', 'Position', 'BloodGroup', 'DOB', 'edit'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  editableTableFormGroup: FormGroup;
  dataSchema: any;
  USER_INFO = [];
  USER_SCHEMA = {
    "EmployeeName": "text",
    "Position": "text",
    "BloodGroup": "text",
    "DOB": "date",
    "edit": "edit",
    "select": "select"
  };
  j=1;
  constructor(public dialog: MatDialog, private empService: EmployeeService,private fb: FormBuilder) {
    this.editableTableFormGroup = this.fb.group({});

  }


  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe((result) => {
      console.log("result");
      console.log(result)
      this.dataSource.data = result;

      result.map((x, i) => {
        //this.CaseDetailsForm.addControl('spotstressname'+i, this.fb.control(x.stressname, Validators.required))
          this.editableTableFormGroup.addControl('EmployeeName'+this.j,this.fb.control("",Validators.required));
          this.editableTableFormGroup.addControl('Position'+this.j,this.fb.control("",Validators.required));
          this.editableTableFormGroup.addControl('DOB'+this.j,this.fb.control("",Validators.required));
          this.editableTableFormGroup.addControl('BloodGroup'+this.j,this.fb.control("",Validators.required));
          this.j++;
      })


    });

    this.dataSchema = this.USER_SCHEMA;

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }






  addRow() {
    const newRow = {id: this.j, "EmployeeName": "", "Position": "","BloodGroup":"", "DOB": "",  isEdit: true, selected: false}
    this.editableTableFormGroup.addControl('EmployeeName'+this.j,this.fb.control("",Validators.required));
    this.editableTableFormGroup.addControl('Position'+this.j,this.fb.control("",Validators.required));
    this.editableTableFormGroup.addControl('DOB'+this.j,this.fb.control("",Validators.required));
    this.editableTableFormGroup.addControl('BloodGroup'+this.j,this.fb.control("",Validators.required));
    this.dataSource.data = [newRow].concat(this.dataSource.data);
    //console.log(this.dataSource);
  }

  removeRow(employeeId) {

    this.dataSource.data = this.dataSource.data.filter(i => i['id'] !== employeeId)
  }

  removeSelectedRows() {
   // this.dataSource.data = this.dataSource.data.filter((u: any) => !u.selected);
    // this.dialog.open(CongirmDialogComponent).afterClosed().subscribe(confirm => {
    //   if (confirm) {

    //   }
    // });
    this.dataSource.data = this.dataSource.data.filter((u: any) => !u.selected);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  getControlName(col,lblName){
    return col+""+lblName;
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.editableTableFormGroup.controls[controlName].hasError(errorName);
  }
}
