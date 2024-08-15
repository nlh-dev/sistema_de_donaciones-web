export interface IReport {
    fecha: Date;
    datos: Dato[];
}

export interface Dato {
    donaciones_fecha_alta: Date;
    donaciones_motivo_id: number;
    donaciones_almacen_cantidad: number;
    uniqueCode: number;
    donaciones_motivo: DonacionesMotivo;
}

export interface DonacionesMotivo {
    motivo_id: number;
    motivo: string;
}
