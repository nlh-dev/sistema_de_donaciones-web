export interface IColumns {
    title: string;
    name: string;
    type: typesColumns;
    width?: string;
    link?: string;
    icon?: string;
    color?: string;
}

export type typesColumns = 'string' | 'links' | 'icon';
