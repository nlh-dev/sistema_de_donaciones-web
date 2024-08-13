import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IBodyDonates, IBodyDonatesEdit, IDonacionesMotivos, IDonacionesTipos, IDonations } from '../interfaces/donates.interface';
import { BaseResponse } from '../interfaces/base.interface';

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

  getSolicitudesDonacionesAPI(): void {
    this.httpClient.get<IDonations[]>(`${this.base_api_url}/donaciones/solicitudes`).subscribe((response: IDonations[]) => {
      this.setDonaciones.set(response);
    });
  }

  getDonacionesAPI(): void {
    this.httpClient.get<IDonations[]>(`${this.base_api_url}/donaciones`).subscribe((response: IDonations[]) => {
      this.setDonaciones.set(response);
    });
  }

  getUniqueDonacionesAPI(idDonation: string): void {
    this.httpClient.get<IDonations>(`${this.base_api_url}/donaciones/consult/${idDonation}`).subscribe((response: IDonations) => {
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

  postDonacionesAPI(donate: IBodyDonates | any): void {
    donate.donacionesMotivoId = Number(donate.donacionesMotivoId);
    donate.donacionesAlmacenCantidad = Number(donate.donacionesAlmacenCantidad);
    donate.donacionesAlmacenId = Number(donate.donacionesAlmacenId);
    donate.donacionesEdadReceptor = Number(donate.donacionesEdadReceptor);
    donate.donacionesCedulaReceptor = Number(donate.donacionesCedulaReceptor);
    donate.donacionesTipoId = Number(donate.donacionesTipoId);

    this.httpClient.post<BaseResponse>(`${this.base_api_url}/donaciones`, donate).subscribe((response: BaseResponse) => {
      console.log(response);
    });
  }

  putDonacionesAPI(donate: IBodyDonatesEdit | any): void {
    this.httpClient.put<BaseResponse>(`${this.base_api_url}/donaciones`, donate).subscribe((response: BaseResponse) => {
      console.log(response);
    });
  }

  putConfirmDonacionesAPI(idDonate: number, confirm: boolean): void {
    const confirmDonate = {
      confirm: confirm
    }
    this.httpClient.put<BaseResponse>(`${this.base_api_url}/donaciones/confirm/${idDonate}`, confirmDonate).subscribe((response: BaseResponse) => {
      console.log(response);
    });
  }
}
