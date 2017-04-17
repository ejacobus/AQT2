
export interface IExhibit {
    //exhibit encompasses everything from individual quilts travels to the quilt on the mall
    exhibitId: number;
    exhibitDate: string;
    exhibitDesc: string;
    exhibitLocation: string;
    exhibitGeoCoord: string;
    //may need to define a coord type to effectively use geo
}
