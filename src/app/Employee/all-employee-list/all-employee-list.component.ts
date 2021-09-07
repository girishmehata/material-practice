import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCell } from '@angular/material/table';
import { EmployeeDeleteDialogComponent } from 'src/app/Dialog/employee-delete-dialog/employee-delete-dialog.component';
import { EmployeeDetails } from 'src/app/Models/EmployeeDetails';
import { EmployeeService } from 'src/app/services/employee.service';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-all-employee-list',
  templateUrl: './all-employee-list.component.html',
  styleUrls: ['./all-employee-list.component.scss']
})
export class AllEmployeeListComponent implements OnInit {
  @ViewChild('groupRef') groupRef: QueryList<MatCell>;

  dataSource: any;
  ELEMENT_DATA: EmployeeDetails[] = [
    { index: 1, empName: 'Akash', position: "Sr.Developer", bloodGroup: 'B+', address: "Pune" },
    { index: 2, empName: 'Suresh', position: "Specalist", bloodGroup: 'A+', address: "Delhi" },
    { index: 3, empName: 'Ramesh', position: "Jr.Developer", bloodGroup: 'AB+', address: "Banglore" },
    { index: 4, empName: 'kiran', position: "Manager", bloodGroup: 'B+', address: "Pune" },
    { index: 5, empName: 'Smita', position: "Account", bloodGroup: 'A+', address: "Nagpur" },
    { index: 6, empName: 'Ravi', position: "Tester", bloodGroup: 'B+', address: "Mumbai" }


  ];

  displayedColumns: string[] = ['index', 'EmployeeName', 'Position', 'Blood Group', 'Address', 'Edit'];

  constructor(public dialog: MatDialog,private empService:EmployeeService) { }

  ngOnInit(): void {   
    this.empService.getAllEmployee().subscribe((result:Response)=>{
      console.log("result");
      console.log(result)
      this.dataSource = result;
    });
  }

  editEmployee(empId) {
    console.log(empId);
  }


  openDialogForDelete(empId) {
    const dialogRef = this.dialog.open(EmployeeDeleteDialogComponent);
    //const input = this.groupRef.find(matInput => matInput.id === element.inputColumn);
    
    let elementRef= this.groupRef;
    console.log(elementRef);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}` + `with employee id is ${empId}`);

    });

  }



}
