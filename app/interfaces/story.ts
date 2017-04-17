import { IStoryElement } from './storyelement';

export interface IStory{
    storyId: number;
    storyName: string;
    storyDescription: string;
    storyElements: IStoryElement[];
    // need the storage mechanism (collective access) to manage sequencing
}
