import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { classActive, classInactive, menuLayout } from './layout.data';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IMenu } from '../interfaces/layout.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  menuLayout: IMenu[] = menuLayout;
  moduleActive: string = '';

  classActive: string = classActive;
  classInactive: string = classInactive;

  router = inject(Router);

  ngOnInit(): void {
    this.setClassList(this.router.url)
  }

  setClassList(menuUrl: string): void {
    this.menuLayout.map(list => list.class = this.classInactive);
    const findMenuActive = this.menuLayout.find(list => list.redirect == menuUrl);

    if(findMenuActive){
      this.moduleActive = findMenuActive.title;
      findMenuActive.class = this.classActive;
    }
  }
}
