import { IMemorialized } from './memorialized';


export interface IPanel {
    panelId: number; //internal identifier
    panelNum: string; //NAMES identifier
    blockId: number; //internal identifier
    blockNum: string; //NAMES identifier
    dateRecd: string;
    blockX1: number;
    blockY1: number;
    blockX2: number;
    blockY2: number;
    memorialized: IMemorialized[];
}