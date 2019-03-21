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

  // Recursively looping over all from controls and groups
  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControls = group.get(key);
      if (abstractControls instanceof FormGroup) {
        this.logKeyValuePairs(abstractControls);
      } else {
        // console.log('Key:' + key +  ' Value:' + abstractControls.value);
        // abstractControls.disable();
        abstractControls.markAsDirty();

      }
    });
  }

  // If you want to set only particulr value then you need to use patch value.

  onLoadDataClick(): void {
    this.logKeyValuePairs(this.employeeForm);
  }

  onSubmit() {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

}
