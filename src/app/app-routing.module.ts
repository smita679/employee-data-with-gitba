import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';

const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'add', component: AddEmployeesComponent },
  { path: 'edit', component: EditEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
