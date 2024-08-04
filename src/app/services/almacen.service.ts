import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IAlmacen, IBodyAlmacen, IBodyAlmacenEdit, IInsumosEstado } from '../interfaces/almacen.interface';
import { BaseResponse } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService extends BaseService {

  private setAlmacen = signal<IAlmacen[]>([]);
  public getAlmacen = computed<IAlmacen[]>(() => this.setAlmacen());

  private setInsumos = signal<IInsumosEstado[]>([]);
  public getInsumos = computed<IInsumosEstado[]>(() => this.setInsumos());

  getAlmacenAPI(): void {
    this.httpClient.get<IAlmacen[]>(`${this.base_api_url}/almacen`).subscribe((response: IAlmacen[]) => {
      this.setAlmacen.set(response);
    })
  }

  getInsumosAPI(): void {
    this.httpClient.get<IInsumosEstado[]>(`${this.base_api_url}/almacen/insumos`).subscribe((response: IInsumosEstado[]) => {
      this.setInsumos.set(response);
    })
  }

  postAlmacenAPI(almacen: IBodyAlmacen): void {
    almacen.almacenTipo = Number(almacen.almacenTipo);
    almacen.almacenEstado = Number(almacen.almacenEstado);
    almacen.almacenFechaExpiracion = new Date(almacen.almacenFechaExpiracion);
    this.httpClient.post<BaseResponse>(`${this.base_api_url}/almacen`, almacen).subscribe((response: BaseResponse) => {
      // console.log(response);
    })
  }
  putAlmacenAPI(almacen: IBodyAlmacenEdit): void {
    almacen.almacenTipo = Number(almacen.almacenTipo);
    almacen.almacenEstado = Number(almacen.almacenEstado);
    almacen.almacenFechaExpiracion = new Date(almacen.almacenFechaExpiracion);
    this.httpClient.put<BaseResponse>(`${this.base_api_url}/almacen`, almacen).subscribe((response: BaseResponse) => {
      // console.log(response);
    })
  }
  deleteAlmacenAPI(userId: string): void {
    this.httpClient.delete<BaseResponse>(`${this.base_api_url}/almacen/${userId}`).subscribe((response: BaseResponse) => {
      this.getAlmacenAPI();
    })
  }
}
