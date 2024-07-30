import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { AlmacenService } from '../../services/almacen.service';
import { BaseComponent } from '../base/base.component';
import { IAlmacen } from '../../interfaces/almacen.interface';
import { columns } from './store.data';
import { IColumns } from '../../interfaces/table.interface';
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

  openDialog(): void {
    this.router.navigate(['/usuario/agregar'])
  }

  editDataDialog(data: IAlmacen): void {
    localStorage.setItem('userEdit', JSON.stringify(data));
    this.router.navigate(['/usuario/editar'])
  }
}
