import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { DonacionesService } from '../../services/donaciones.service';
import { BaseComponent } from '../base/base.component';
import { IColumns } from '../../interfaces/table.interface';
import { columns } from './donates.data';
import { IDonations } from '../../interfaces/donates.interface';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-donates',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './donates.component.html',
  styleUrl: './donates.component.scss',
})
export class DonatesComponent extends BaseComponent implements OnInit{
  columns: IColumns<IDonations>[] = columns;
  dataTable: IDonations[] = [];
  title: string = 'Lista de Donaciones';
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

  openDialog(): void {
    this.router.navigate(['/usuario/agregar'])
  }

  editDataDialog(data: IDonations): void {
    localStorage.setItem('userEdit', JSON.stringify(data));
    this.router.navigate(['/usuario/editar'])
  }
}
