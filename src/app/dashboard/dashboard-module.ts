import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard';
import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeFormComponent } from './employee-form/employee-form';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, EmployeeListComponent, EmployeeFormComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, RouterModule]
})
export class DashboardModule {}