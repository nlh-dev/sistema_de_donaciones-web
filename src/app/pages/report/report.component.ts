import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { BaseComponent } from '../base/base.component';
import { IDonations } from '../../interfaces/donates.interface';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { columns } from './report.data';
import { ReportService } from '../../services/report.service';
import { IReport } from '../../interfaces/report.interface';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent extends BaseComponent implements OnInit{
  columns: IColumns<IReport>[] = columns;
  dataTable: IReport[] = [];
  title: string = 'Reportes de Donaciones';
  ref = inject(ChangeDetectorRef);
  reportServices = inject(ReportService);

  constructor(){
    super();
    effect(() => {
      this.dataTable = this.reportServices.getReport();
      this.ref.detectChanges();
    })
  }

  ngOnInit(): void {
    this.reportServices.getReportAPI();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'show'){
      this.editDataDialog(dataComponent.data, '/donaciones/ver');
    }
  }

  openDialog(): void {
    this.router.navigate(['/donaciones/agregar'])
  }

  editDataDialog(data: IDonations, redirectTo: string): void {
    // localStorage.setItem('donatesEdit', JSON.stringify(data));
    // this.router.navigate([redirectTo])
  }
}