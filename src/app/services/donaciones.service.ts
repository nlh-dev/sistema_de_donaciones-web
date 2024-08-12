import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IDonacionesTipos, IDonations } from '../interfaces/donates.interface';

@Injectable({
  providedIn: 'root',
})
export class DonacionesService extends BaseService {
  private setDonaciones = signal<IDonations[]>([]);
  public getDonaciones = computed<IDonations[]>(() => this.setDonaciones());

  private setTipos = signal<IDonacionesTipos[]>([]);
  public getTipos = computed<IDonacionesTipos[]>(() => this.setTipos());

  getDonacionesAPI(): void {
    this.httpClient.get<IDonations[]>(`${this.base_api_url}/donaciones`).subscribe((response: IDonations[]) => {
        this.setDonaciones.set(response);
      });
  }

  getTiposAPI(): void {
    this.httpClient.get<IDonacionesTipos[]>(`${this.base_api_url}/donaciones/tipos`).subscribe((response: IDonacionesTipos[]) => {
        this.setTipos.set(response);
      });
  }
}
