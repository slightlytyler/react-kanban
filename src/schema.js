import { Schema } from 'redux-orm';
import Lane from 'pods/lane/model';

const schema = new Schema();

schema.register(Lane);

export default schema;
