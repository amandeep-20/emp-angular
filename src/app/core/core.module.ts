import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details';
import { LoaderComponent } from './components/loader/loader';
import { AuthService } from './services/auth';
import { EmployeeService } from './services/employee';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [EmployeeDetailsComponent, LoaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [EmployeeDetailsComponent, LoaderComponent],
  providers: [AuthService, EmployeeService]
})
export class CoreModule {}