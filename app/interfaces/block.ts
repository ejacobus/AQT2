import { IPanel } from './panel';
import { IExhibit } from './exhibit';
import { IFeature } from './feature';

export interface IBlock {
    blockId: number;
    blockNum: string;
    imageUrl: string;
    panels: IPanel[];
    exhibits: IExhibit[];
    blockFeatures: IFeature[];
}