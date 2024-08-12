import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IDonacionesMotivos, IDonacionesTipos, IDonations } from '../interfaces/donates.interface';

@Injectable({
  providedIn: 'root',
})
export class DonacionesService extends BaseService {
  private setDonaciones = signal<IDonations[]>([]);
  public getDonaciones = computed<IDonations[]>(() => this.setDonaciones());

  private setOneDonaciones = signal<IDonations>({} as IDonations);
  public getOneDonaciones = computed<IDonations>(() => this.setOneDonaciones());

  private setTipos = signal<IDonacionesTipos[]>([]);
  public getTipos = computed<IDonacionesTipos[]>(() => this.setTipos());

  private setMotivos = signal<any[]>([]);
  public getMotivos = computed<any[]>(() => this.setMotivos());

  getDonacionesAPI(): void {
    this.httpClient.get<IDonations[]>(`${this.base_api_url}/donaciones`).subscribe((response: IDonations[]) => {
        this.setDonaciones.set(response);
      });
  }

  getUniqueDonacionesAPI(idDonation: string): void {
    this.httpClient.get<IDonations>(`${this.base_api_url}/donaciones/${idDonation}`).subscribe((response: IDonations) => {
        this.setOneDonaciones.set(response);
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
