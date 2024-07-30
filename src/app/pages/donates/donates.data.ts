import { IDonations } from "../../interfaces/donates.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columns: IColumns<IDonations>[] = [
    {
        title: 'Nombre',
        name: (element) => element.donaciones_nombre_receptor,
        nameColumn: 'donaciones_nombre_receptor',
        type: 'string',
        width: 'w-[20%]'
    },
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
        title: 'Estado',
        name: () => 'Estado',
        nameColumn: 'estado',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Tipo',
        name: (element) => element.donaciones_tipos.tipo_donaciones_nombre,
        nameColumn: 'tipo_donaciones_nombre',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Ver',
        name: () => 'see',
        nameColumn: 'see',
        type: 'icon',
        icon: 'visibility',
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
