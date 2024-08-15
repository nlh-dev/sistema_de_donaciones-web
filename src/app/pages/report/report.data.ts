import { IReport } from "../../interfaces/report.interface";
import { IColumns } from "../../interfaces/table.interface";

export const columns: IColumns<IReport>[] = [
    {
        title: 'Fecha',
        name: (element) => element.fecha,
        nameColumn: 'fecha',
        type: 'date',
        width: 'w-[20%]'
    },
    {
        title: 'Motivo',
        name: (element) => element.datos[0].donaciones_motivo.motivo,
        nameColumn: 'motivo',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Cantidad',
        name: (element) => element.datos[0].donaciones_almacen_cantidad,
        nameColumn: 'donaciones_almacen_cantidad',
        type: 'string',
        width: 'w-[20%]'
    },
    {
        title: 'Codigo',
        name: (element) => element.datos[0].uniqueCode,
        nameColumn: 'tipo_donaciones_nombre',
        type: 'string',
        width: 'w-[20%]'
    }
]
