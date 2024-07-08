export interface IColumns {
    title: string;
    name: string;
    type: typesColumns;
    link?: string;
    icon?: string;
}

export type typesColumns = 'string' | 'links' | 'icon';
