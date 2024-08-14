import { IDonations } from "../../interfaces/donates.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columns: IColumns<IDonations>[] = [
    {
        title: 'Fecha',
        name: (element) => element.donaciones_fecha_alta,
        nameColumn: 'donaciones_fecha_alta',
        type: 'date',
        width: 'w-[10%]'
    },
    {
        title: 'Motivo',
        name: (element) => element.donaciones_motivo.motivo,
        nameColumn: 'motivo',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Cantidad',
        name: (element) => element.donaciones_almacen_cantidad,
        nameColumn: 'donaciones_almacen_cantidad',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Codigo',
        name: () => '000001',
        nameColumn: 'tipo_donaciones_nombre',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Imprimir',
        name: () => 'show',
        nameColumn: 'show',
        type: 'icon',
        icon: 'print',
        color: 'primary'
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
