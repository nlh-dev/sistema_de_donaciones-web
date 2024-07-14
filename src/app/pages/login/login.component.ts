import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

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

}
