import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUser, IUsersRoles, IBodyUser, IBodyUserEdit } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent extends BaseComponent implements OnInit {

  userData: IUser = {} as IUser;

  formUser = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    usersRoleId: new FormControl(0, [Validators.required])
  })
  rolesData: IUsersRoles[] = [];

  titleForm: string = 'Editar Usuario';
  userService = inject(UsersService);
  ref = inject(ChangeDetectorRef);

  constructor() {
    super();

    effect(() => {
      this.ref.detectChanges();
      this.rolesData = this.userService.getRoles();
    })
  }

  ngOnInit(): void {
    this.userService.getRolesAPI();
    this.userData = JSON.parse(localStorage.getItem('userToken') as string);
    this.formUser.controls.nombre.setValue(this.userData.nombre);
    this.formUser.controls.apellido.setValue(this.userData.apellido);
    this.formUser.controls.usuario.setValue(this.userData.usuario);
    this.formUser.controls.password.setValue(this.userData.password);
    this.formUser.controls.usersRoleId.setValue(this.userData.users_role_id);

    this.formUser.get('usersRoleId')?.disable()
  }

  sendFormData(): void {
    const sendUser = {
      ...this.formUser.value,
      idUsers: this.userData.users_ID
    };
    this.userService.putUsersAPI(sendUser as IBodyUserEdit);
    this.goBack();
  }

  goBackForm(): void {
    this.goBack();
  }
}
