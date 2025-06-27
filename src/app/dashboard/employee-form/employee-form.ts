// import { Component, Input } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EmployeeService, Employee } from '../../core/services/employee';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-employee-form',
//   templateUrl: './employee-form.html',
//   styleUrls: ['./employee-form.css'],
//   standalone: false
// })
// export class EmployeeFormComponent {
//   employeeForm: FormGroup;
//   @Input() employee: Employee | null = null;
//   isLoading = false;

//   constructor(
//     private fb: FormBuilder,
//     private employeeService: EmployeeService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.employeeForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       department: ['', Validators.required]
//     });

//     this.route.params.subscribe(params => {
//       if (params['id']) {
//         this.isLoading = true;
//         this.employeeService.getEmployee(params['id']).subscribe(employee => {
//           if (employee) {
//             this.employee = employee;
//             this.employeeForm.patchValue(employee);
//           }
//           this.isLoading = false;
//         });
//       }
//     });
//   }

//   onSubmit(): void {
//     if (this.employeeForm.valid) {
//       this.isLoading = true;
//       const employee: Employee = {
//         id: this.employee ? this.employee.id : 0,
//         ...this.employeeForm.value
//       };
//       if (this.employee) {
//         this.employeeService.updateEmployee(employee).subscribe(() => {
//           this.isLoading = false;
//           this.router.navigate(['/dashboard/list']);
//         });
//       } else {
//         this.employeeService.addEmployee(employee).subscribe(() => {
//           this.isLoading = false;
//           this.router.navigate(['/dashboard/list']);
//         });
//       }
//     }
//   }
// }



import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService, Employee } from '../../core/services/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css'],
  standalone: false
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  @Input() employee: Employee | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      startDate: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isLoading = true;
        this.employeeService.getEmployee(params['id']).subscribe(employee => {
          if (employee) {
            this.employee = employee;
            this.employeeForm.patchValue(employee);
          }
          this.isLoading = false;
        });
      }
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.isLoading = true;
      const employee: Employee = {
        id: this.employee ? this.employee.id : '',
        ...this.employeeForm.value,
        status: 'Active' // Default status for new employees
      };
      if (this.employee) {
        this.employeeService.updateEmployee(employee).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/dashboard/list']);
        });
      } else {
        this.employeeService.addEmployee(employee).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/dashboard/list']);
        });
      }
    }
  }
}
