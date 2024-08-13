import { IDonations } from "../../interfaces/donates.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columns: IColumns<IDonations>[] = [
    {
        title: 'Nombre y Apellido',
        name: (element) => element.donaciones_nombre_receptor,
        nameColumn: 'nombre',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Tipo de donación',
        name: (element) => element.donaciones_tipos.tipo_donaciones_nombre,
        nameColumn: 'usuario',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Tipo de solicitud',
        name: (element) => element.donaciones_motivo.motivo,
        nameColumn: 'roles_nombre',
        type: 'string',
        width: 'w-[30%]'
    },
    {
        title: 'Ver',
        name: () => 'see',
        nameColumn: 'show',
        type: 'icon',
        icon: 'visibility',
        color: 'primary'
    },
]
