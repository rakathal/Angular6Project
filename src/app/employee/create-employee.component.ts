import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
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
