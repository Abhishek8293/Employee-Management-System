import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDailogComponent } from '../confirm-dailog/confirm-dailog.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private employeeService = inject(EmployeeService);
  private dialog = inject(MatDialog);

  employees: Employee[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'department',
    'joining_date',
    'edit',
    'delete',
  ];

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (res) => {
        console.log('Fetched employees:', res); 
        this.employees = res;
      },
      error: (err) => {
        console.error('Failed to fetch employees', err);
      },
    });
  }

  updateEmployee(employee: Employee) {
  const dialogRef = this.dialog.open(EditEmployeeComponent, {
    data: employee,
  });

  dialogRef.afterClosed().subscribe((updated: Employee) => {
    if (updated) {
      this.employeeService.updateEmployee(updated.id!, updated).subscribe(() => {
        this.fetchEmployees();
      });
    }
  });
}

  deleteEmployee(id: number) {
    const dialogRef = this.dialog.open(ConfirmDailogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.deleteEmployee(id).subscribe({
          next: () => this.fetchEmployees(),
          error: (err) => console.error('Error deleting employee', err),
        });
      }
    });
  }

}
