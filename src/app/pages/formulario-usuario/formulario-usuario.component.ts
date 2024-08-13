import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';
import { IBodyUser, IBodyUserEdit, IUser, IUsersRoles } from '../../interfaces/users.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.scss',
})
export class FormularioUsuarioComponent extends BaseComponent implements OnInit, OnDestroy{

  dataUserEdit: IUser | null = {} as IUser;
  formUser = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    usersRoleId: new FormControl(0, [Validators.required])
  })
  rolesData: IUsersRoles[] = [];

  titleForm: string = 'Añadir Usuario';

  userService = inject(UsersService);
  ref = inject(ChangeDetectorRef);

  constructor(){
    super();

    effect(() => {
      this.ref.detectChanges();
      this.rolesData = this.userService.getRoles();
    })
  }

  ngOnInit(): void {
      this.userService.getRolesAPI();
      this.dataUserEdit = JSON.parse(localStorage.getItem('userEdit') as string);
      if(this.router.url.includes('editar') && this.dataUserEdit){
        this.titleForm = this.router.url.includes('ver') ? 'Información de Usuario' :'Editar Usuario';
        this.formUser.controls.nombre.setValue(this.dataUserEdit.nombre);
        this.formUser.controls.apellido.setValue(this.dataUserEdit.apellido);
        this.formUser.controls.usuario.setValue(this.dataUserEdit.usuario);
        this.formUser.controls.password.setValue(this.dataUserEdit.password);
        this.formUser.controls.usersRoleId.setValue(this.dataUserEdit.users_role_id);
      } else{ 
        this.formUser.controls.usersRoleId.setValue(0);
      }
  }

  validateDisabled():void {
    if(this.router.url.includes('ver')){
      this.formUser.get('nombre')?.disable();
      this.formUser.get('apellido')?.disable();
      this.formUser.get('usuario')?.disable();
      this.formUser.get('password')?.disable();
      this.formUser.get('usersRoleId')?.disable();
    }
  }

  sendFormData(): void {
    if(!this.dataUserEdit){
      const sendUser = {
        ...this.formUser.value,
      };
      this.userService.postUsersAPI(this.formUser.value as IBodyUser);
    }
    else {
      const sendUser = {
        ...this.formUser.value,
        idUsers: this.dataUserEdit?.users_ID
      };
      this.userService.putUsersAPI(sendUser as IBodyUserEdit);
    }
    this.goBackForm();
  }

  goBackForm(): void {
    this.goBack();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('userEdit');
  }
}
