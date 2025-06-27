import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  startDate: string;
  status: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

getEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>('http://localhost:3000/employees');
}

getEmployee(id: string): Observable<Employee> {
  return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
}

addEmployee(employee: Employee): Observable<Employee> {
  // Remove id to allow auto-generation
  const { id, ...employeeData } = employee;
  return this.http.post<Employee>('http://localhost:3000/employees', employeeData);
}

updateEmployee(employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`http://localhost:3000/employees/${employee.id}`, employee);
}

deleteEmployee(id: string): Observable<void> {
  return this.http.delete<void>(`http://localhost:3000/employees/${id}`);
}

}



//  private employees: Employee[] = [
//     { id: 'EMP001', name: 'Sarah Wilson', email: 'sarah.wilson@company.com', phone: '123-456-7890', department: 'Engineering', position: 'Senior Developer', startDate: '2023/01/15', status: 'Active' },
//     { id: 'EMP002', name: 'Michael Chen', email: 'michael.chen@company.com', phone: '234-567-8901', department: 'Product', position: 'Product Manager', startDate: '2022/06/10', status: 'Active' },
//     { id: 'EMP003', name: 'Emily Brown', email: 'emily.brown@company.com', phone: '345-678-9012', department: 'Design', position: 'UX Designer', startDate: '2023/03/20', status: 'On Leave' },
//     { id: 'EMP004', name: 'David Lee', email: 'david.lee@company.com', phone: '456-789-0123', department: 'Engineering', position: 'Software Engineer', startDate: '2022/09/05', status: 'Active' },
//     { id: 'EMP005', name: 'Lisa Kim', email: 'lisa.kim@company.com', phone: '567-890-1234', department: 'Marketing', position: 'Marketing Lead', startDate: '2023/02/12', status: 'Active' },
//   ];

//   getEmployees(): Observable<Employee[]> {
//     return of(this.employees);
//   }

//   getEmployee(id: string): Observable<Employee | undefined> {
//     return of(this.employees.find(emp => emp.id === id));
//   }

//   addEmployee(employee: Employee): Observable<Employee> {
//     employee.id = `EMP${String(this.employees.length + 1).padStart(3, '0')}`;
//     this.employees.push(employee);
//     return of(employee);
//   }

//   updateEmployee(employee: Employee): Observable<Employee> {
//     const index = this.employees.findIndex(emp => emp.id === employee.id);
//     if (index !== -1) {
//       this.employees[index] = employee;
//     }
//     return of(employee);
//   }

//   deleteEmployee(id: string): Observable<boolean> {
//     this.employees = this.employees.filter(emp => emp.id !== id);
//     return of(true);
//   }
