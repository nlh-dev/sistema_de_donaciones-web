import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IDonacionesMotivos, IDonacionesTipos, IDonations } from '../interfaces/donates.interface';

@Injectable({
  providedIn: 'root',
})
export class DonacionesService extends BaseService {
  private setDonaciones = signal<IDonations[]>([]);
  public getDonaciones = computed<IDonations[]>(() => this.setDonaciones());

  private setTipos = signal<IDonacionesTipos[]>([]);
  public getTipos = computed<IDonacionesTipos[]>(() => this.setTipos());

  private setMotivos = signal<any[]>([]);
  public getMotivos = computed<any[]>(() => this.setMotivos());

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

  getMotivosAPI(): void {
    this.httpClient.get<IDonacionesMotivos[]>(`${this.base_api_url}/donaciones/motivos`).subscribe((response: IDonacionesMotivos[]) => {
        this.setMotivos.set(response);
      });
  }
}
