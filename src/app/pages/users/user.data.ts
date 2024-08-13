import { IColumns } from "../../interfaces/table.interface";
import { IUser } from "../../interfaces/users.interface";

export const columns: IColumns<IUser>[] = [
    {
        title: 'Nombre',
        name: (element) => element.nombre,
        nameColumn: 'nombre',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Apellido',
        name: (element) => element.apellido,
        nameColumn: 'apellido',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Usuario',
        name: (element) => element.usuario,
        nameColumn: 'usuario',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Rol',
        name: (element) => element.users_roles.roles_nombre,
        nameColumn: 'roles_nombre',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Estado',
        name: (element) => element.users_status,
        nameColumn: 'states',
        type: 'boolean',
        width: 'w-[30%]'
    },
    {
        title: 'Editar',
        name: () => 'edit',
        nameColumn: 'edit',
        type: 'icon',
        icon: 'edit',
        color: 'primary'
    }
    // {
    //     title: 'Eliminar',
    //     name: () => 'delete',
    //     nameColumn: 'delete',
    //     type: 'icon',
    //     icon: 'delete',
    //     color: 'warn'
    // }
]
