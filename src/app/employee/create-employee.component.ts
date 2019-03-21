import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  // For Setting all the values
  /*
  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: 'Pragim Technologies',
      email: 'raj@gmail.com',
      skills: {
        skillName: 'c#',
        experienceInYears: 5,
        proficiency: 'beginner'
      }
    });
  }
  */

  // If you want to set only particulr value then you need to use patch value.

  onLoadDataClick(): void {
    this.employeeForm.patchValue({
      fullName: 'Pragim Technologies',
      email: 'raj@gmail.com',
      skills: {
        skillName: 'c#'
      }
    });
  }

  onSubmit() {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

}
