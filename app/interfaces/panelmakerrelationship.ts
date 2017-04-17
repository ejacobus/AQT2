export interface IPanelmakerRelationship {
    // links panelmakers and memorialized in a many-to-many relationship
    panelmakerRelationshipId: number;
    memorializedId: number;
    panelmakerId: number;
    relationship: string;
    //should be controlled vocabulary for relationship
}