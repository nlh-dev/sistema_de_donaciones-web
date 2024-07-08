import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DonatesComponent } from './donates/donates.component';

export const routes: Routes = [
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
                path: 'gestion-usuario',
                component: UsersComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
