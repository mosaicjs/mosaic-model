import { DataSet } from 'mosaic-dataset';
import Resource from './Resource';
import ModelEntity from './ModelEntity';

export default class Folder extends DataSet {
    get DataType(){ return Resource; }
    constructor(options, ...args) {
        super(options, ...args);
        ModelEntity.init(this, options);
    }
}
ModelEntity.addTo(Folder);
