import { IMenu } from "../interfaces/layout.interface";

export const menuLayout: IMenu[] = [
    {
        title: 'Inicio',
        redirect: '/',
        icon: 'home',
        class:''
    },
    {
        title: 'Donaciones',
        redirect: '/donaciones',
        icon: 'bloodtype',
        class:''
    },
    {
        title: 'Notificaciones',
        redirect: '/notificaciones',
        icon: 'notifications',
        class:''
    },
    {
        title: 'Perfil',
        redirect: '/perfil',
        icon: 'person',
        class:''
    },
    {
        title: 'Gestión de usuario',
        redirect: '/gestion-usuario',
        icon: 'group',
        class:''
    }
];

export const classActive: string = 'middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize'
export const classInactive: string = 'middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize'