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

  showBtns: boolean = true;
  userService = inject(UsersService)

  ngOnInit(): void {
    this.showBtns = this.userService.getUserLocal()?.users_roles.roles_nombre !== 'Colaborador';
  }

  goTo(router: string): void {
    this.router.navigate([router]);
  }
}
