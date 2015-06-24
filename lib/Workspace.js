import { DataSet } from 'mosaic-dataset';
import Project from './Project';
import ModelEntity from './ModelEntity';

export default class Workspace extends DataSet {
    get DataType(){ return Project; }
    constructor(options, ...args) {
        super(options, ...args);
        ModelEntity.init(this, options);
    }
}
ModelEntity.addTo(Workspace);
