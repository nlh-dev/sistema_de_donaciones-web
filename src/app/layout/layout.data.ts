import { IMenu } from "../interfaces/layout.interface";

export const menuLayout: IMenu[] = [
  {
    title: 'Inicio',
    redirect: '/',
    icon: 'home',
    class: ''
  },
  {
    title: 'Perfil',
    redirect: '/perfil',
    icon: 'person',
    class: ''
  },
  {
    title: 'separador',
    redirect: '',
    icon: '',
    class: ''
  },
  {
    title: 'Donaciones',
    redirect: '/donaciones',
    icon: 'bloodtype',
    class: ''
  },
  {
    title: 'Solicitudes',
    redirect: '/notificaciones',
    icon: 'mail',
    class: ''
  },
  {
    title: 'Almacen',
    redirect: '/almacen',
    icon: 'warehouse',
    class: ''
  },
  {
    title: 'Usuario',
    redirect: '/usuario',
    icon: 'group',
    class: ''
  }
];

export const classActive: string = 'middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize'
export const classInactive: string = 'middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none bg-white hover:bg-gray-200 text-[#000C4BE3] disabled:pointer-events-none text-xs py-3 rounded-3xl w-full flex items-center gap-4 px-4 capitalize'
