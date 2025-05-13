import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,  
    FormsModule,
    MatInputModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  employee: Employee = {
    name: '',
    email: '',
    department: '',
    joining_date: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  // Handle form submission
  onSubmit(): void {
    if (this.isValid()) {
      this.employeeService.createEmployee(this.employee).subscribe(
        (response) => {
          console.log('Employee added successfully', response);
          this.clearForm();
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error adding employee', error);
        }
      );
    }
  }

  // Validate employee form data
  isValid(): boolean {
    return (
      Boolean(this.employee.name) &&
      Boolean(this.employee.email) &&
      Boolean(this.employee.department) &&
      Boolean(this.employee.joining_date)
    );
  }

  // Clear the form
  clearForm(form?: any): void {
    this.employee = {
      name: '',
      email: '',
      department: '',
      joining_date: '',
    };
    if (form) {
      form.resetForm();
    }
  }
}
