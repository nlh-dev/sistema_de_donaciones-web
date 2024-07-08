export interface IColumns {
    title: string;
    name: string;
    type: typesColumns;
    link?: string;
    icon?: string;
    color?: string;
}

export type typesColumns = 'string' | 'links' | 'icon';
