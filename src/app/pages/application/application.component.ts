import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BaseComponent } from '../base/base.component';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { columns } from './application.data';
import { DonacionesService } from '../../services/donaciones.service';
import { IDonations } from '../../interfaces/donates.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    TableComponent
  ],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
})
export class ApplicationComponent extends BaseComponent implements OnInit{
  columns: IColumns<IDonations>[] = columns;
  dataTable: IDonations[] = [];
  includeBtnAdd: boolean = true;
  title: string = 'Lista de Solicitudes';
  ref = inject(ChangeDetectorRef)
  donacionesServices = inject(DonacionesService);
  userServices = inject(UsersService);

  constructor(){
    super();
    effect(() => {
      this.dataTable = this.donacionesServices.getDonaciones();
      this.ref.detectChanges();
    })
  }

  ngOnInit(): void {
    const userToken = this.userServices.getUserLocal();
    this.donacionesServices.getSolicitudesDonacionesAPI();
    // this.includeBtnAdd = userToken?.users_roles.roles_nombre !== 'Colaborador';
    if(userToken?.users_roles.roles_nombre == 'Colaborador'){
      this.columns = this.columns.filter(opt => opt.nameColumn !== 'show');
    }
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'show'){
      this.editDataDialog(dataComponent.data);
    }
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
  }

  openDialog(): void {
    this.router.navigate(['/donaciones/agregar'])
  }

  editDataDialog(data: IDonations ): void {
    localStorage.setItem('application', JSON.stringify(data));
    this.router.navigate([`/solicitud/${data.donaciones_ID}`])
  }
}
