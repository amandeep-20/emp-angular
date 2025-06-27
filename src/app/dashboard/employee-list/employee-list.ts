import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService, Employee } from '../../core/services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
  standalone: false,
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  @Output() delete = new EventEmitter<string>(); // Updated to string
  isLoading = true;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.isLoading = false;
    });
  }

  editEmployee(id: string): void {
    this.router.navigate([`/dashboard/edit/${id}`]);
  }

  deleteEmployee(id: string): void {
    this.isLoading = true;
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== id); // Fixed comparison
      this.delete.emit(id); // Emit as string
      this.isLoading = false;
    });
  }

  trackById(index: number, employee: Employee): string {
    return employee.id; // Changed to return string
  }
}
