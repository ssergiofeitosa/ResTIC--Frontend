import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrl: './burger-details.component.css'
})
export class BurgerDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BurgerDetailsComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close(); // Fecha o modal
  }
}
