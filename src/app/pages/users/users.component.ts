import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { columns, dataTable, formularioUser, IUsers } from './user.data';
import { BaseComponent } from '../base/base.component';

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
export class UsersComponent extends BaseComponent{
  columns: IColumns[] = columns;
  dataTable: IUsers[] = dataTable;

  openDialog(): void {
    this.router.navigate(['/usuario/agregar'])
  }

  editDataDialog(data: IUsers): void {
    localStorage.setItem('userEdit', JSON.stringify(data));
    this.router.navigate(['/usuario/editar'])
  }
}
