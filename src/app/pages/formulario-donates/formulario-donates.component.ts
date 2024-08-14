import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BaseComponent } from '../base/base.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DonacionesService } from '../../services/donaciones.service';
import { IDonacionesMotivos, IDonacionesTipos, IDonations } from '../../interfaces/donates.interface';
import { IAlmacen } from '../../interfaces/almacen.interface';
import { AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-formulario-donates',
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
  templateUrl: './formulario-donates.component.html',
  styleUrl: './formulario-donates.component.scss',
})
export class FormularioDonatesComponent extends BaseComponent implements OnInit, OnDestroy {

  dataDonateEdit: IDonations | null = {} as IDonations;

  formMotivo = new FormGroup({
    donacionesMotivoId: new FormControl('', [Validators.required])
  });

  formDonates = new FormGroup({
    donacionesNombreReceptor: new FormControl('', [Validators.required]),
    donacionesCedulaReceptor: new FormControl('', [Validators.required]),
    donacionesEdadReceptor: new FormControl('', [Validators.required]),
    donacionesAlmacenCantidad: new FormControl('', [Validators.required]),
    donacionesAlmacenId: new FormControl('', [Validators.required]),
    donacionesDiagnosticoReceptor: new FormControl('', [Validators.required]),

    donacionesParroquia: new FormControl('', [Validators.required]),
    donacionesTipoId: new FormControl('', [Validators.required]),
    donacionesTelefonoReceptor: new FormControl('', [Validators.required]),
    donacionesFechaAlta: new FormControl(new Date(), [Validators.required]),
  });

  tiposData: IDonacionesTipos[] = [];
  motivosData: IDonacionesMotivos[] = [];
  insumosData: IAlmacen[] = [];
  donatesService = inject(DonacionesService);
  almacenService = inject(AlmacenService);
  ref = inject(ChangeDetectorRef);
  title: string = 'Crear';

  constructor() {
    super();

    effect(() => {
      this.ref.detectChanges();
      this.tiposData = this.donatesService.getTipos();
      this.motivosData = this.donatesService.getMotivos();
      this.insumosData = this.almacenService.getAlmacen();
    })
  }

  ngOnInit(): void {
    this.donatesService.getTiposAPI();
    this.donatesService.getMotivosAPI();
    this.almacenService.getAlmacenAPI();

    this.dataDonateEdit = JSON.parse(localStorage.getItem('donatesEdit') as string);
    if (this.dataDonateEdit) {
      
      this.title = this.router.url.includes('ver') ? 'Información de' : 'Editar';
      this.formMotivo.controls.donacionesMotivoId.setValue(this.dataDonateEdit.donaciones_motivo_id.toString());
      this.validateDisabled();
      this.formDonates.controls.donacionesNombreReceptor.setValue(this.dataDonateEdit.donaciones_nombre_receptor);
      this.formDonates.controls.donacionesCedulaReceptor.setValue(this.dataDonateEdit.donaciones_cedula_receptor.toString());
      this.formDonates.controls.donacionesEdadReceptor.setValue(this.dataDonateEdit.donaciones_edad_receptor.toString());
      this.formDonates.controls.donacionesAlmacenCantidad.setValue(this.dataDonateEdit.donaciones_almacen_cantidad.toString())
      this.formDonates.controls.donacionesAlmacenId.setValue(this.dataDonateEdit.donaciones_almacen_id.toString());
      this.formDonates.controls.donacionesDiagnosticoReceptor.setValue(this.dataDonateEdit.donaciones_diagnostico_receptor);

      this.formDonates.controls.donacionesParroquia.setValue(this.dataDonateEdit.donaciones_parroquia)
      this.formDonates.controls.donacionesTipoId.setValue(this.dataDonateEdit.donaciones_tipo_id.toString())
      this.formDonates.controls.donacionesTelefonoReceptor.setValue(this.dataDonateEdit.donaciones_telefono_receptor)
      this.formDonates.controls.donacionesFechaAlta.setValue(this.dataDonateEdit.donaciones_fecha_alta)
    }
  }

  validateDisabled():void {
    if(this.router.url.includes('ver')){
      this.formMotivo.get('donacionesMotivoId')?.disable();
      this.formDonates.get('donacionesNombreReceptor')?.disable();
      this.formDonates.get('donacionesCedulaReceptor')?.disable();
      this.formDonates.get('donacionesEdadReceptor')?.disable();
      this.formDonates.get('donacionesAlmacenCantidad')?.disable();
      this.formDonates.get('donacionesAlmacenId')?.disable();
      this.formDonates.get('donacionesDiagnosticoReceptor')?.disable();
      this.formDonates.get('donacionesParroquia')?.disable();
      this.formDonates.get('donacionesTipoId')?.disable();
      this.formDonates.get('donacionesTelefonoReceptor')?.disable();
      this.formDonates.get('donacionesFechaAlta')?.disable();
    }
  }

  sendFormData(): void {
    if (!this.dataDonateEdit) {
      const sendUser = {
        ...this.formDonates.value,
        ...this.formMotivo.value,
      };
      this.donatesService.postDonacionesAPI(sendUser);
    }
    else {
      const sendUser = {
        ...this.formDonates.value,
        ...this.formMotivo.value,
        donationId: this.dataDonateEdit.donaciones_ID
      };
      if(this.router.url.includes('ver')){
        return this.goBack();
      }
      this.donatesService.putDonacionesAPI(sendUser);
    }

    this.goBack();
  }

  goBackForm(): void {
    this.goBack();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('donatesEdit');
  }
}
