import { IDataForm, IFormulario } from "../interfaces/form.interface";
import { IColumns } from "../interfaces/table.interface";

export interface IUsers {
    name: string;
    lastname: string;
    rol: string;
}

export const columns: IColumns[] = [
    {
        title: 'Nombre',
        name: 'name',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Apellido',
        name: 'lastname',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Rol',
        name: 'rol',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: 'edit',
        color: 'primary'
    },
    {
        title: 'Eliminar',
        name: 'delete',
        type: 'icon',
        icon: 'delete',
        color: 'warn'
    },
]

export const dataTable: IUsers[] = [
    {
        name: "Juan",
        lastname: "Pérez",
        rol: "Admin"
    },
    {
        name: "María",
        lastname: "González",
        rol: "User"
    },
    {
        name: "Carlos",
        lastname: "Ramírez",
        rol: "Admin"
    },
    {
        name: "Ana",
        lastname: "López",
        rol: "User"
    },
    {
        name: "Pedro",
        lastname: "Martínez",
        rol: "Admin"
    },
    {
        name: "Laura",
        lastname: "Fernández",
        rol: "User"
    },
    {
        name: "Diego",
        lastname: "Rodríguez",
        rol: "Admin"
    },
    {
        name: "Isabel",
        lastname: "Sánchez",
        rol: "User"
    },
    {
        name: "Andrés",
        lastname: "Torres",
        rol: "Admin"
    },
    {
        name: "Valentina",
        lastname: "Gómez",
        rol: "User"
    }
];

export const dataFormUser: IDataForm[] = [
    {
        label: 'Nombre de usuario',
        formControl: 'name',
        value: '',
        required: true,
        typeInput: 'text'
    },
    {
        label: 'Apellido de usuario',
        formControl: 'lastname',
        value: '',
        required: true,
        typeInput: 'text'
    },
    {
        label: 'Rol de usuario',
        formControl: 'rol',
        value: '',
        required: true,
        typeInput: 'select',
        option: [{
            label: 'Administrador',
            value: 1
        }]
    },
];


export const formularioUser: IFormulario = {
    title: 'Formulario de usuarios',
    dataForm: dataFormUser
}
