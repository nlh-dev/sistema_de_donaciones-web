import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { IUser, IUsersRoles, IBodyUser, IBodyUserEdit } from '../../interfaces/users.interface';
import { BaseComponent } from '../base/base.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DonacionesService } from '../../services/donaciones.service';
import { IDonacionesMotivos, IDonacionesTipos } from '../../interfaces/donates.interface';

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
export class FormularioDonatesComponent extends BaseComponent implements OnInit, OnDestroy{

  formDonates: FormGroup = new FormGroup({
    donacionesMotivoId: new FormControl('', [Validators.required]),

    donacionesNombreReceptor: new FormControl('', [Validators.required]),
    donacionesCedulaReceptor: new FormControl('', [Validators.required]),
    donacionesEdadReceptor: new FormControl('', [Validators.required]),
    donacionesAlmacenCantidad: new FormControl('', [Validators.required]),
    //No esta
    donacionesInsumo: new FormControl('', [Validators.required]),

    donacionesDiagnosticoReceptor: new FormControl('', [Validators.required]),

    donacionesParroquia: new FormControl('', [Validators.required]),
    donacionesTipoId: new FormControl('', [Validators.required]),
    donacionesTelefonoReceptor: new FormControl('', [Validators.required]),
    donacionesFechaAlta: new FormControl(new Date(), [Validators.required]),

    // donacionesAlmacenId: number;
    // donacionesDescripcion: string;
  });

  tiposData: IDonacionesTipos[] = [];
  motivosData: IDonacionesMotivos[] = [];
  insumosData: IUsersRoles[] = [];
  donatesService = inject(DonacionesService);
  ref = inject(ChangeDetectorRef);

  constructor(){
    super();

    effect(() => {
      this.ref.detectChanges();
      this.tiposData = this.donatesService.getTipos();
      this.motivosData = this.donatesService.getMotivos();
      // this.insumosData = this.donatesService.getRoles();
    })
  }

  ngOnInit(): void {
      this.donatesService.getTiposAPI();
      this.donatesService.getMotivosAPI();
  }

  sendFormData(): void {
    // if(!this.dataUserEdit){
    //   const sendUser = {
    //     ...this.formDonates.value,
    //   };
    //   // this.donatesService.postUsersAPI(this.formDonates.value as IBodyUser);
    // }
    // else {
    //   const sendUser = {
    //     ...this.formDonates.value,
    //     idUsers: this.dataUserEdit?.users_ID
    //   };
    //   // this.donatesService.putUsersAPI(sendUser as IBodyUserEdit);
    // }
    console.log(this.formDonates.value);
    
    // this.goBackForm();
  }

  goBackForm(): void {
    this.goBack();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('userEdit');
  }
}
