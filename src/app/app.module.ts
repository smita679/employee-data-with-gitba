import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AgePipe } from 'src/pipe/age.pipe';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    ListEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
    ConfirmationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
