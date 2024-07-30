import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IDonations } from '../interfaces/donates.interface';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService extends BaseService {

  private setDonaciones = signal<IDonations[]>([]);
  public getDonaciones = computed<IDonations[]>(() => this.setDonaciones());

  getDonacionesAPI(): void {
    this.httpClient.get<IDonations[]>(`${this.base_api_url}/donaciones`).subscribe((response: IDonations[]) => {
      this.setDonaciones.set(response);
    })
  }
}
