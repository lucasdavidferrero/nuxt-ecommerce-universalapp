export interface MenuAccesoDirecto {
    uid: string
    label: string
    iconoURL: string
    link: string
}

export type MenuNode = {
    key: string;
    codigo: string;
    value: {
        label: string;
        counter: number;
        link?: string;
    };
    children?: MenuNode[];
    isLeaf: boolean;
};
