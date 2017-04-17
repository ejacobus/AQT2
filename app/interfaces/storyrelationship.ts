export interface IStoryRelationship{
    //connects a particular story to Block, Panel, Memorialized, Exhibit, Panelmaker, City
    //could expand to relationship to outside cultural events as well
    storyRelatioshipId: number;
    storyId: number;
    relatedTable: string; //
    relatedTableId: number;
    relationshipDesc: string;
}