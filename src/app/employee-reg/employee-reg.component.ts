import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeserviceService } from './employeeservice.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrl: './employee-reg.component.css'
})
export class EmployeeRegComponent implements OnInit {
  allEmpData: any;
  alert_msg: Boolean = false;
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    department: new FormControl('', Validators.required),
    empname: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    gender: new FormControl(''),
    joindate: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
    password: new FormControl(''),
    confirmpass: new FormControl(''),
    empStatus: new FormControl(''),
  });

  constructor(private signupservice: EmployeeserviceService, private router: Router) { }
  ngOnInit(): void {
    this.signupservice.getallemployees().subscribe((response: any) => {
      this.allEmpData = response;
      console.log(this.allEmpData)

    });
  }
  saveEmp(): void {
    console.log(this.employeeForm);
    this.signupservice.createUser(this.employeeForm.value)
      .subscribe(
        (response: any) => {
          console.log('Data sent successfully:', response);
          alert(response.success);

          // Optionally, reset the form
          if (response.success) {
            this.employeeForm.reset();
            this.alert_msg = true;
            //this.router.navigate(['/dashboard'])
          }
        },
        (error: any) => {
          console.error('Error sending data:', error);
          alert(error.message)
        }
      );
  }

}
