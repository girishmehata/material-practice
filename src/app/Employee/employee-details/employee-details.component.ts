import {
  ChangeDetectionStrategy,

  Component,
  OnInit
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmployeeDetailsComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  employeeNewJoinerField: string;
  prefferLocation: Array<any> = [];
  constructor(private formBuilder: FormBuilder) { }




  ngOnInit(): void {
    this.employeeNewJoinerField = "1";
    this.employeeForm = this.formBuilder.group(
      {
        empFirstName: ['', Validators.required],
        empMiddleName: ['', Validators.required],
        empLastName: ['', Validators.required],
        employeePosition: ['', Validators.required],
        employeeBloodGroup: ['', Validators.required],
        employeeAddress: ['', Validators.required],
        employeeDob: ['', Validators.required],
        employeeNewJoiner: ['1', Validators.required],
        preferLocation: this.formBuilder.array([])
      }
    );
  }





  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.employeeForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.employeeForm.value, null, 2));
  }

  onSelectedFields(e) {
    console.log(e.source.value);
    const checkArray = this.employeeForm.get("preferLocation") as FormArray;
    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {        
        if (e.source.value == item.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;

      });
    }
    console.log(checkArray.value);
  }

  resetForm(){
    this.employeeForm.reset();
    this.employeeNewJoinerField = "1";

  }


}
