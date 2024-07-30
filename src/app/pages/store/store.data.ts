import { IAlmacen } from "../../interfaces/almacen.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columns: IColumns<IAlmacen>[] = [
    {
        title: 'Nombre',
        name: (element) => element.almacen_nombre,
        nameColumn: 'almacen_nombre',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Tipo de almacen',
        name: (element) => element.donaciones_tipos.tipo_donaciones_nombre,
        nameColumn: 'tipo_donaciones_nombre',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Cantidad',
        name: (element) => element.almacen_cantidad,
        nameColumn: 'almacen_cantidad',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Editar',
        name: () => 'edit',
        nameColumn: 'edit',
        type: 'icon',
        icon: 'edit',
        color: 'primary'
    },
    {
        title: 'Eliminar',
        name: () => 'delete',
        nameColumn: 'delete',
        type: 'icon',
        icon: 'delete',
        color: 'warn'
    }
]
