import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  showPassword: boolean = false;

  showMessageError: boolean = false;

  router = inject(Router);

  ngOnInit(): void {
    console.log('Holis');
  }


  onSubmitLogin(): void {
    console.log(this.loginForm.value);
    if(this.loginForm.get('username')?.value == 'admin'){
      this.router.navigate(['/'])
    } else {
      this.showMessageError = true;
    }
  }

  show(): void {
    this.showPassword = !this.showPassword;
  }

}
