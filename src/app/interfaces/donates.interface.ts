
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
    donaciones_estado_id:            number;
    donaciones_fecha_alta:           Date;
    donaciones_motivo:               IDonacionesMotivos;
    donaciones_tipos:                IDonacionesTipos;
    estado:                          IEstado;
}

export interface IDonacionesMotivos {
    motivo_id: number;
    motivo:    string;
}

export interface IDonacionesTipos {
    tipo_donaciones_id:     number;
    tipo_donaciones_nombre: string;
}

export interface IEstado {
    estados_id:     number;
    estados_nombre: string;
}

export interface IBodyDonates {
    donacionesTipoId: number;
    donacionesMotivoId: number;
    donacionesNombreReceptor: string;
    donacionesCedulaReceptor: number;
    donacionesTelefonoReceptor: string;
    donacionesEdadReceptor: number;
    donacionesParroquia: string;
    donacionesDiagnosticoReceptor: string;
    donacionesAlmacenId: number;
    donacionesAlmacenCantidad: number;
    donacionesFechaAlta: Date
}

export interface IBodyDonatesEdit extends IBodyDonates {
    donationId: number;
}