import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DonatesComponent } from './pages/donates/donates.component';
import { FormularioUsuarioComponent } from './pages/formulario-usuario/formulario-usuario.component';

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
                path: 'donaciones',
                component: DonatesComponent
            },
            {
                path: 'notificaciones',
                component: NotificationsComponent
            },
            {
                path: 'perfil',
                component: ProfileComponent
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
        ]
    },
    {
        path: '**', redirectTo: ''
    }
];
