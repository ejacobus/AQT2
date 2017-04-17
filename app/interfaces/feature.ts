export interface IFeature {
    // for future use, identifying features of the panel or block including attachments
    // descriptions, or other metadata
    featureId: number;
    featureOf: string; //in ("block", "panel")
    featureType: string; //controlled vocabulary
    featureDesc: string;
}