import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UtilityService } from './utility.service';
import { SearchByName } from './search-by-name';
import { SortBy } from './sort-by';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    SearchByName,
    SortBy,
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'employee', pathMatch: 'full'
      },

      {
        path:'employee', 
        component: EmployeeDetailsComponent,
        children: [
          {
            path: 'add',
            component: AddEditEmployeeComponent
          }, 
          {
            path: ':id/edit',
            component: AddEditEmployeeComponent
          }
         
        ]
      },

    ], 
    { useHash : true })
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
