import { Component, Input } from '@angular/core';
import { Employee } from '../../services/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.html',
  styleUrls: ['./employee-details.css'],
  standalone: false
})
export class EmployeeDetailsComponent {
  @Input() employee: Employee | null = null;
}