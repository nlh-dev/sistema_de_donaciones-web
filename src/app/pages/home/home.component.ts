import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../base/base.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends BaseComponent implements OnInit{

  showBtnCreateUser: boolean = true;
  showBtnStores: boolean = true;
  showBtnApplication: boolean = true;
  userService = inject(UsersService)

  ngOnInit(): void {
    const getRoleUser = this.userService.getUserLocal()?.users_roles.roles_nombre;
    if(getRoleUser == 'Administrador'){
      this.showBtnCreateUser = true;
      this.showBtnStores = true;
      this.showBtnApplication = true;
    }
    if(getRoleUser == 'Administración'){
      this.showBtnCreateUser = false;
      this.showBtnStores = true;
      this.showBtnApplication = true;
    }
    if(getRoleUser == 'Colaborador'){
      this.showBtnCreateUser = false;
      this.showBtnStores = true;
      this.showBtnApplication = false;
    }
    if(getRoleUser == 'Encargado General'){
      this.showBtnCreateUser = false;
      this.showBtnStores = true;
      this.showBtnApplication = false;
    }
    if(getRoleUser == 'Encargado de Almacen'){
      this.showBtnCreateUser = false;
      this.showBtnStores = true;
      this.showBtnApplication = true;
    }
  }

  goTo(router: string): void {
    this.router.navigate([router]);
  }
}
