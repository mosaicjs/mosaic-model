import { DataSet } from 'mosaic-dataset';
import Resource from './Resource';
import ModelEntity from './ModelEntity';

// Access control: 
// - resource: read resource
// - folder: read list of folder elements
// - resource: update resource (change data) and save it
// - folder: create a new element in a folder (add a resource)
// - workspace: create a new project 
// - folder: remove a resource
// - 

export default class Folder extends DataSet {
    get DataType(){ return Resource; }
    constructor(options, ...args) {
        super(options, ...args);
        ModelEntity.init(this, options);
    }
}
ModelEntity.addTo(Folder);
