import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { columns, dataTable, formularioUser, IUsers } from './user.data';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  columns: IColumns[] = columns;
  dataTable: IUsers[] = dataTable;

  dialog = inject(MatDialog)

  openDialog(): void {
    formularioUser.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormComponent, {
      data: formularioUser,
    });

    dialogRef.afterClosed().subscribe(result => {
      result.password = '12345678';
    })
  }

  editDataDialog(data: IUsers): void {
    const findNameUser = formularioUser.dataForm.find(form => form.formControl == 'name');
    const findLastnameUser = formularioUser.dataForm.find(form => form.formControl == 'lastname');
    const findRoles = formularioUser.dataForm.find(form => form.formControl == 'rol');

    if(findRoles && findNameUser && findLastnameUser){
      findRoles.value = data.rol;
      findNameUser.value = data.name;
      findLastnameUser.value = data.lastname;
    }

    const dialogRef = this.dialog.open(FormComponent, {
      data: formularioUser,
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
