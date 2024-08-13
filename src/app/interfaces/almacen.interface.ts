export interface IAlmacen {
    almacen_id:                  number;
    almacen_nombre:              string;
    almacen_cantidad:            number;
    almacen_tipo:                number;
    almacen_estado:              number;
    almacen_dosis:               number;
    almacen_fecha_de_expiracion: Date;
    almacen_descripcion:         string;
    insumos_estado:              IInsumosEstado;
    donaciones_tipos:            IDonacionesTipos;
}

export interface IDonacionesTipos {
    tipo_donaciones_id:     number;
    tipo_donaciones_nombre: string;
}

export interface IInsumosEstado {
    insumo_estado_id:     number;
    insumo_estado_nombre: string;
}

export interface IBodyAlmacen {
    almacenNombre: string;
    almacenCantidad:number;
    almacenTipo:number;
    almacenEstado:number;
    almacenFechaExpiracion: Date;
}
export interface IBodyAlmacenEdit extends IBodyAlmacen {
    almacenId:number;
}
