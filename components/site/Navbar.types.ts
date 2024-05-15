export interface RubroAccesoDirecto {
    aik_re2_codigo: string
    aik_re2_descri: string
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
