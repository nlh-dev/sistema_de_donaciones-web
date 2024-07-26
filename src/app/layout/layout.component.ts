import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { classActive, classInactive, menuLayout } from './layout.data';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IMenu } from '../interfaces/layout.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { InfoLayoutComponent } from '../components/info-layout/info-layout.component';

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
  moduleActive: string = '';
  nameUser: string = 'Hector Navarro';

  classActive: string = classInactive;
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


  logout(): void {
    this.router.navigate(['/login']);
  }
}
