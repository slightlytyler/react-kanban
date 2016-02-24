export const CREATE_LANE = 'CREATE_LANE';

export const actions = {
  createLane(title) {
    return { type: CREATE_LANE, title };
  },
};

import { Model } from 'redux-orm';

class Lane extends Model {
  static reducer(state, action, Lane) {
    switch (action.type) {
      case 'CREATE_LANE':
        Lane.create({
          title: action.title,
        });
        break;

      default:
        return Lane.getNextState();
    }
  }

  toString() {
    return `Lane: ${this.name}`;
  }
}

Lane.modelName = 'Lane';

export default Lane;
