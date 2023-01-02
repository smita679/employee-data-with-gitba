import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  employeeForm!: FormGroup;
  constructor(private employeeService: EmployeeService) {
    this.employeeForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      dob: new FormControl(),
      dept: new FormControl()
    });
  }

  ngOnInit(): void {

  }
  submitForm() {
    // console.log(this.employeeForm);
    let name = (this.employeeForm.value.name).split(" ")
    let date = new Date(this.employeeForm.value.dob);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
  
    let payload = {
      "dept": this.employeeForm.value.dept,
      "dob": `${yyyy}-${mm}-${dd}`,
      "emailId": this.employeeForm.value.email,
      "fname": name[0],
      "lname": name[1],
    }
    // console.log(payload)
    this.employeeService.saveEmployee(payload).subscribe(res => {
      console.log(res)
    })
  }

}
