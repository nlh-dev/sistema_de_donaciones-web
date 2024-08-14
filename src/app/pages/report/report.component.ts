import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { BaseComponent } from '../base/base.component';
import { DonacionesService } from '../../services/donaciones.service';
import { IDonations } from '../../interfaces/donates.interface';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { columns } from './report.data';

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
  columns: IColumns<IDonations>[] = columns;
  dataTable: IDonations[] = [];
  title: string = 'Reportes de Donaciones';
  ref = inject(ChangeDetectorRef);
  donacionesServices = inject(DonacionesService)

  constructor(){
    super();
    effect(() => {
      this.dataTable = this.donacionesServices.getDonaciones();
      this.ref.detectChanges();
    })
  }

  ngOnInit(): void {
    this.donacionesServices.getDonacionesAPI();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data, '/donaciones/editar');
    }
    if(dataComponent.action == 'show'){
      this.editDataDialog(dataComponent.data, '/donaciones/ver');
    }
  }

  openDialog(): void {
    this.router.navigate(['/donaciones/agregar'])
  }

  editDataDialog(data: IDonations, redirectTo: string): void {
    localStorage.setItem('donatesEdit', JSON.stringify(data));
    this.router.navigate([redirectTo])
  }
}