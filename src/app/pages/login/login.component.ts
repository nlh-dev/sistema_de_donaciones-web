import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../base/base.component';
import { AuthService } from '../../services/auth.service';
import { ILogin, IResponseLogin } from '../../interfaces/users.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private _snackBar: MatSnackBar) {
    super()
  }

  showPassword: boolean = false;
  authService = inject(AuthService);

  ngOnInit(): void {
    
  }


  onSubmitLogin(): void {
    this.authService.httpClient.post<IResponseLogin>(`${this.authService.base_api_url}/auth`, this.loginForm.value as ILogin).subscribe((response: IResponseLogin) => {
      if(response.success == true){
        localStorage.setItem('userToken', JSON.stringify(response.userAuthenticate));
        setTimeout(() => {
          if( response.userAuthenticate.users_roles.roles_nombre == 'Colaborador'){
            this.router.navigate(['/solicitudes']);
          }else {
            this.router.navigate(['/']);
          }
        }, 3000);
      }

      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: response
      })
    })
  }

  show(): void {
    this.showPassword = !this.showPassword;
  }

}
