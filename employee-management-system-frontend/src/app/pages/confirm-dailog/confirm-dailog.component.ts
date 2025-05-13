import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-confirm-dailog',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule,MatDialogModule],
  templateUrl: './confirm-dailog.component.html',
  styleUrl: './confirm-dailog.component.css'
})
export class ConfirmDailogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDailogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
