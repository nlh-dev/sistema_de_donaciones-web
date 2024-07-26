import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.scss',
})
export class FormularioUsuarioComponent extends BaseComponent implements OnInit{

  ngOnInit(): void {
      console.log(this.router.url);
  }

  goBackForm(): void {
    if(this.router.url.includes('editar')){
      localStorage.removeItem('userEdit')
    }
    this.goBack()
  }
}
