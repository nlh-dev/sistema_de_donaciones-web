import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DonatesComponent } from './pages/donates/donates.component';
import { FormularioUsuarioComponent } from './pages/formulario-usuario/formulario-usuario.component';
import { StoreComponent } from './pages/store/store.component';
import { FormularioStoreComponent } from './pages/formulario-store/formulario-store.component';
import { FormularioDonatesComponent } from './pages/formulario-donates/formulario-donates.component';
import { ApplicationComponent } from './pages/application/application.component';
import { FormularioApplicationComponent } from './pages/formulario-application/formulario-application.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'reportes',
                component: ReportComponent
            },
            {
                path: 'donaciones',
                component: DonatesComponent
            },
            {
                path: 'donaciones/agregar',
                component: FormularioDonatesComponent
            },
            {
                path: 'donaciones/editar',
                component: FormularioDonatesComponent
            },
            {
                path: 'donaciones/ver',
                component: FormularioDonatesComponent
            },
            {
                path: 'notificaciones',
                component: NotificationsComponent
            },
            {
                path: 'solicitudes',
                component: ApplicationComponent
            },
            {
                path: 'solicitud/:id',
                component: FormularioApplicationComponent
            },
            {
                path: 'perfil',
                component: ProfileComponent
            },
            {
                path: 'almacen',
                component: StoreComponent
            },
            {
                path: 'almacen/agregar',
                component: FormularioStoreComponent
            },
            {
                path: 'almacen/editar',
                component: FormularioStoreComponent
            },
            {
                path: 'almacen/ver',
                component: FormularioStoreComponent
            },
            {
                path: 'usuario',
                component: UsersComponent
            },
            {
                path: 'usuario/agregar',
                component: FormularioUsuarioComponent
            },
            {
                path: 'usuario/editar',
                component: FormularioUsuarioComponent
            },
            {
                path: 'usuario/ver',
                component: FormularioUsuarioComponent
            },
        ]
    },
    {
        path: '**', redirectTo: ''
    }
];
