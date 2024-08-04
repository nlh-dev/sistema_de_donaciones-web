import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { AlmacenService } from '../../services/almacen.service';
import { BaseComponent } from '../base/base.component';
import { IAlmacen } from '../../interfaces/almacen.interface';
import { columns } from './store.data';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent extends BaseComponent implements OnInit { 
  columns: IColumns<IAlmacen>[] = columns;
  dataTable: IAlmacen[] = [];
  title: string = 'Lista de Insumos';
  almacenService = inject(AlmacenService);
  ref = inject(ChangeDetectorRef);

  constructor(){
    super();
    effect(() => {
      this.dataTable = this.almacenService.getAlmacen();
      this.ref.detectChanges();
    })
  }

  ngOnInit(): void {
    this.almacenService.getAlmacenAPI();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data);
    }
    if(dataComponent.action == 'delete'){
      this.deleteData(dataComponent.data);
    }
  }

  openDialog(): void {
    this.router.navigate(['/almacen/agregar'])
  }

  editDataDialog(data: IAlmacen): void {
    localStorage.setItem('storeEdit', JSON.stringify(data));
    this.router.navigate(['/almacen/editar'])
  }
  deleteData(data: IAlmacen): void {
    this.almacenService.deleteAlmacenAPI(data.almacen_id.toString());
  }
}
