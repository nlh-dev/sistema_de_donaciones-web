import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { classActive, classInactive, menuLayout } from './layout.data';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IMenu, TypesRoles } from '../interfaces/layout.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { InfoLayoutComponent } from '../components/info-layout/info-layout.component';
import { UsersService } from '../services/users.service';
import { IUser } from '../interfaces/users.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
    MatDividerModule,
    InfoLayoutComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  menuLayout: IMenu[] = menuLayout;
  moduleActive: IMenu = {} as IMenu;
  nameUser: string = 'Hector Navarro';

  classActive: string = classInactive;
  classInactive: string = classInactive;

  router = inject(Router);
  userService = inject(UsersService);

  ngOnInit(): void {
    const getUser: IUser = this.userService.getUserLocal() as IUser;
    this.menuLayout = this.menuLayout.filter(per => per.permissess.includes(getUser.users_roles.roles_nombre as TypesRoles))
    this.setClassList(this.router.url);

    if(!getUser){
      this.router.navigate(['/login']);
    }else {
      this.nameUser = `${getUser.nombre} ${getUser.apellido}`
    }
  }

  setClassList(menuUrl: string): void {
    this.menuLayout.map(list => list.class = this.classInactive);
    const findMenuActive = this.menuLayout.find(list => list.redirect == menuUrl);

    if(findMenuActive){
      this.moduleActive = findMenuActive;
      findMenuActive.class = this.classActive;
    }
  }

  logout(): void {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
