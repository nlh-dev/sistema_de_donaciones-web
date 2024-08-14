export interface IMenu {
    title: string;
    redirect: string;
    icon: string;
    class: string;
    permissess: TypesRoles[];
    footerText: string;
}

export type TypesRoles = 'Administración'| 'Administrador' |'Encargado General' |'Encargado de Almacen' |'Colaborador';