import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDiagloData } from '../../interfaces/dialog.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.scss',
})
export class DialogDeleteComponent implements OnInit { 

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDiagloData,
  ){}

  ngOnInit(): void {
    console.log(this.data);
  }

  actionBtn(action: boolean): void {
    this.dialogRef.close(action);
  }
}
