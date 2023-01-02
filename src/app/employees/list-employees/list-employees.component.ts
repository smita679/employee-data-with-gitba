import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  dataSource: Employee[] = [];
  math=Math
  constructor(private employeeService: EmployeeService,private router:Router,public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllEmployees()
  }
  displayedColumns = ['image','name','empId','dob','email','phone','dept','action'];
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      response => {
        let result:any=response;
        if (response) {
          this.dataSource = result.data;
        }
      },
      error => {
        alert(error)
      }

    );
  }
  add(){
    this.router.navigate(['/add']);
  }
  edit(){
    this.router.navigate(['/edit']);
  }
  delete(){
    let dialogRef=this.dialog.open(ConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result.result==true){
        alert("Call delete api")
      }
    }); 
  }
}
