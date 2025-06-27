  import { Component, Input } from '@angular/core';
  import { EmployeeService, Employee } from '../../core/services/employee';
  import { ActivatedRoute } from '@angular/router';
  import { AuthService } from '../../core/services/auth';

  @Component({
    selector: 'app-employee-profile',
    templateUrl: './employee-profile.html',
    styleUrls: ['./employee-profile.css'],
    standalone: false
  })
  export class EmployeeProfileComponent {
    @Input() employee: Employee | null = null;
    isLoading = true;

    constructor(
      private employeeService: EmployeeService,
      private authService: AuthService
    ) {
      const userId = this.authService.getCurrentUserId(); // get from AuthService
      this.employeeService.getEmployee(userId).subscribe(employee => {
      this.employee = employee || null;
      this.isLoading = false;
});
    }

    canEdit(): boolean {
      return this.authService.getUserRole() === 'admin';
    }
  }
