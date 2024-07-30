export interface IColumns<T> {
    title: string;
    name: (element: T) => string | number;
    nameColumn: string;
    type: typesColumns;
    width?: string;
    link?: string;
    icon?: string;
    color?: string;
}

export type typesColumns = 'string' | 'links' | 'icon';
