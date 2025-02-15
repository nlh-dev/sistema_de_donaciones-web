import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { IBodyAlmacen as IBodyAlmacén, IBodyAlmacenEdit, IInsumosEstado, IDonacionesTipos, IAlmacen } from '../../interfaces/almacen.interface';
import { AlmacenService } from '../../services/almacen.service';
import { DonacionesService } from '../../services/donaciones.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-formulario-store',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './formulario-store.component.html',
  styleUrl: './formulario-store.component.scss',
})
export class FormularioStoreComponent extends BaseComponent implements OnInit, OnDestroy {

  dataStoreEdit: IAlmacen | null = {} as IAlmacen;
  formStore = new FormGroup({
    almacenNombre: new FormControl('', [Validators.required]),
    almacenUnidadMedida: new FormControl('', [Validators.required]),
    almacenCantidad: new FormControl(0, [Validators.required]),
    almacenTipo: new FormControl(0, [Validators.required]),
    almacenEstado: new FormControl(0, [Validators.required]),
    almacenDosis: new FormControl(0, [Validators.required]),
    almacenFechaExpiracion: new FormControl(new Date(), [Validators.required]),
    almacenDescripcion: new FormControl('', [Validators.required]),
  })
  tiposData: IDonacionesTipos[] = [];
  estadosData: IInsumosEstado[] = [];

  titleForm: string = 'Añadir Insumo(s)';

  almacenService = inject(AlmacenService);
  donacionesService = inject(DonacionesService);
  ref = inject(ChangeDetectorRef);

  constructor() {
    super();

    effect(() => {
      this.ref.detectChanges();
      this.estadosData = this.almacenService.getInsumos();
      this.tiposData = this.donacionesService.getTipos();
    })
  }

  ngOnInit(): void {
    this.almacenService.getInsumosAPI();
    this.donacionesService.getTiposAPI();

    this.dataStoreEdit = JSON.parse(localStorage.getItem('storeEdit') as string);

    if ((this.router.url.includes('editar') || this.router.url.includes('ver')) && this.dataStoreEdit) {
      this.titleForm = this.router.url.includes('ver')? 'Información de Insumo(s)' : 'Editar Insumo(s)';
      this.validateDisabled();
      this.formStore.controls.almacenNombre.setValue(this.dataStoreEdit.almacen_nombre);
      this.formStore.controls.almacenCantidad.setValue(this.dataStoreEdit.almacen_cantidad);
      this.formStore.controls.almacenTipo.setValue(this.dataStoreEdit.almacen_tipo);
      this.formStore.controls.almacenEstado.setValue(this.dataStoreEdit.almacen_estado);
      this.formStore.controls.almacenFechaExpiracion.setValue(this.dataStoreEdit.almacen_fecha_de_expiracion);
      this.formStore.controls.almacenDescripcion.setValue(this.dataStoreEdit.almacen_descripcion);
      this.formStore.controls.almacenDosis.setValue(this.dataStoreEdit.almacen_dosis);
    } else {
      this.formStore.controls.almacenTipo.setValue(0);
      this.formStore.controls.almacenEstado.setValue(0);
    }
  }

  validateDisabled():void {
    if(this.router.url.includes('ver')){
      this.formStore.get('almacenNombre')?.disable();
      this.formStore.get('almacenUnidadMedida')?.disable();
      this.formStore.get('almacenCantidad')?.disable();
      this.formStore.get('almacenTipo')?.disable();
      this.formStore.get('almacenEstado')?.disable();
      this.formStore.get('almacenDosis')?.disable();
      this.formStore.get('almacenFechaExpiracion')?.disable();
      this.formStore.get('almacenDescripcion')?.disable();
    }
  }

  sendFormData(): void {
    if (!this.dataStoreEdit) {
      const sendStore = {
        ...this.formStore.value,
      };
      this.almacenService.postAlmacenAPI(this.formStore.value as IBodyAlmacén);
    }
    else {
      const sendStore = {
        ...this.formStore.value,
        almacenId: this.dataStoreEdit.almacen_id
      };
      if(this.router.url.includes('ver')){
        return this.goBack();
      }
      this.almacenService.putAlmacenAPI(sendStore as IBodyAlmacenEdit);
    }
    this.goBackForm();
  }

  goBackForm(): void {
    this.goBack();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('storeEdit');
  }
}