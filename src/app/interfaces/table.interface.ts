export interface IColumns<T> {
    title: string;
    name: (element: T) => string | number | Date;
    nameColumn: string;
    type: typesColumns;
    width?: string;
    link?: string;
    icon?: string;
    color?: string;
}

export type typesColumns = 'string' | 'icon' | 'date';
