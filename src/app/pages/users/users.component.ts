import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { columns } from './user.data';
import { BaseComponent } from '../base/base.component';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/users.interface';

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
export class UsersComponent extends BaseComponent implements OnInit{
  columns: IColumns<IUser>[] = columns;
  dataTable: IUser[] = [];
  title: string = 'Lista de Usuarios';

  usersService = inject(UsersService);
  ref = inject(ChangeDetectorRef)

  constructor(){
    super();
    effect(() => {
      this.dataTable = this.usersService.getUsers();
      this.ref.detectChanges();
    })
  }

  ngOnInit(): void {
    this.usersService.getUsersAPI();
  }

  openDialog(): void {
    this.router.navigate(['/usuario/agregar'])
  }

  editDataDialog(data: IUser): void {
    localStorage.setItem('userEdit', JSON.stringify(data));
    this.router.navigate(['/usuario/editar'])
  }
}
