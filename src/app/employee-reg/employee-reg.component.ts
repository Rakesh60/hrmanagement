import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrl: './employee-reg.component.css'
})
export class EmployeeRegComponent {
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    department: new FormControl('', Validators.required),
    empName: new FormControl('', Validators.required),
    mobile: new FormControl('',Validators.required),
    gender: new FormControl(''),
    joindate: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
    password: new FormControl(''),
    confirmpass: new FormControl(''),
    empStatus: new FormControl(''),
  });

  saveEmp() {
    console.log(this.employeeForm.value)
  }

}
