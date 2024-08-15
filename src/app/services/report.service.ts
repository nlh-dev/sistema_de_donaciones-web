import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IReport } from '../interfaces/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService {
  private setReport = signal<IReport[]>([]);
  public getReport = computed<IReport[]>(() => this.setReport());


  getReportAPI(): void {
    this.httpClient.get<IReport[]>(`${this.base_api_url}/report`).subscribe((response: IReport[]) => {
      response.map(rep => {
        rep.datos[0].uniqueCode =  this.generateRandomNumber();
      })
      this.setReport.set(response);
    });
  }
  
  generateRandomNumber(): number{
    return Math.floor(Math.random() * 1000000);
  }


}