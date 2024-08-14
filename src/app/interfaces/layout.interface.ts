export interface IMenu {
    title: string;
    redirect: string;
    icon: string;
    class: string;
    permissess: TypesRoles[];
    footerText: string;
}

export type TypesRoles = 'Administrador' |'Encargado General' |'Encargado de Almacen' |'Colaborador';