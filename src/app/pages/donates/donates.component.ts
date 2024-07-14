import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-donates',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './donates.component.html',
  styleUrl: './donates.component.scss',
})
export class DonatesComponent { }
