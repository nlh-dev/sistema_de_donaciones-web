import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IAlmacen } from '../interfaces/almacen.interface';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService extends BaseService {

  private setAlmacen = signal<IAlmacen[]>([]);
  public getAlmacen = computed<IAlmacen[]>(() => this.setAlmacen());

  getAlmacenAPI(): void {
    this.httpClient.get<IAlmacen[]>(`${this.base_api_url}/almacen`).subscribe((response: IAlmacen[]) => {
      this.setAlmacen.set(response);
    })
  }
}
