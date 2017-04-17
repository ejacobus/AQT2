import { IPanelmaker } from './panelmaker';
import { ICity } from './city';

export interface IMemorialized {
    // formerly "name"
    memorializedId: number;
    memorialized: string; //name
    dob: string;
    dod: string;
    //panelmakers: IPanelmaker[]; 
    //should panelmakers be here? I decided no, as this is not a direct attribute of memorialized
    //instead can be linked through panelmakerRelationship->panelmaker
    cities: ICity[];
}