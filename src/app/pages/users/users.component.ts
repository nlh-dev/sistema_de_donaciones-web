import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { columns } from './user.data';
import { BaseComponent } from '../base/base.component';
import { UsersService } from '../../services/users.service';
import { IChangeStatusUser, IUser } from '../../interfaces/users.interface';

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

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data);
    }
    if(dataComponent.action == 'states'){
      this.activeUser(dataComponent.data);
    }
    if(dataComponent.action == 'delete'){
      this.deleteData(dataComponent.data);
    }
  }

  openDialog(): void {
    this.router.navigate(['/usuario/agregar'])
  }

  activeUser(data: IUser): void {
    const user: IChangeStatusUser = {
      idUsers: data.users_ID,
      active:!data.users_status
    }
    this.usersService.updateUsersStatusAPI(user);
  }

  editDataDialog(data: IUser): void {
    localStorage.setItem('userEdit', JSON.stringify(data));
    this.router.navigate(['/usuario/editar'])
  }

  deleteData(data: IUser): void {
    this.usersService.deleteUsersAPI(data.users_ID.toString());
  }
}
