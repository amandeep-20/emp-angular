import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './employee-profile/employee-profile';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmployeeProfileComponent],
  imports: [CommonModule, CoreModule, RouterModule]
})
export class ProfileModule {}