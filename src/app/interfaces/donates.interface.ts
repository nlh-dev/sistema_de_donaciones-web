export interface IDonations {
    donaciones_ID:                   number;
    donaciones_tipo_id:              number;
    donaciones_motivo_id:            number;
    donaciones_nombre_receptor:      string;
    donaciones_cedula_receptor:      number;
    donaciones_telefono_receptor:    string;
    donaciones_edad_receptor:        number;
    donaciones_parroquia:            string;
    donaciones_diagnostico_receptor: string;
    donaciones_almacen_id:           number;
    donaciones_almacen_cantidad:     number;
    donaciones_descripcion:          string;
    donaciones_fecha_alta:           Date;
    donaciones_motivo:               IDonacionesMotivo;
    donaciones_tipos:                IDonacionesTipos;
}

export interface IDonacionesMotivo {
    motivo_id: number;
    motivo:    string;
}

export interface IDonacionesTipos {
    tipo_donaciones_id:     number;
    tipo_donaciones_nombre: string;
}

export interface IDonacionesMotivos {
    motivo_id: number;
    motivo:    string;
}
