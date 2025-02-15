import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';
import { DonatesComponent } from '../donates/donates.component';
import { DonacionesService } from '../../services/donaciones.service';
import { IDonations } from '../../interfaces/donates.interface';

@Component({
  selector: 'app-formulario-application',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './formulario-application.component.html',
  styleUrl: './formulario-application.component.scss',
})
export class FormularioApplicationComponent extends BaseComponent implements OnInit{

  donateServices = inject(DonacionesService);
  donationApplicated: IDonations = {} as IDonations;
  ref = inject(ChangeDetectorRef);
  title: string = '';

  day: string = '';
  month: string = '';
  year: number = 0;

  constructor(){
    super();
    effect(() => {
      this.donationApplicated = this.donateServices.getOneDonaciones();
      this.title = this.donateServices.getOneDonaciones().donaciones_motivo.motivo.split(' ')[0]
      
      const date = new Date(this.donateServices.getOneDonaciones().donaciones_fecha_alta);
      this.day = String(date.getUTCDate()).padStart(2, '0');
      this.month = String(date.getUTCMonth() + 1).padStart(2, '0');
      this.year = date.getUTCFullYear();
      this.ref.detectChanges();      
    })
  }

  ngOnInit(): void {
    this.routerActive.paramMap.subscribe(params => {
      const id = params.get('id');
      this.donateServices.getUniqueDonacionesAPI(String(id));
    });
  }

  confirmApplication(): void {
    this.donateServices.putConfirmDonacionesAPI(this.donationApplicated.donaciones_ID, true);
    this.goBack();
  }

  denegateApplication(): void {
    this.donateServices.putConfirmDonacionesAPI(this.donationApplicated.donaciones_ID, false);
    this.goBack();
  }
}
