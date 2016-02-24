export const CREATE_LANE = 'CREATE_LANE';

const actions = {
  createLane() {
    return { type: CREATE_LANE }
  }
};

const reducers = {
  records(state = new Map(), action) {
    switch (action.type) {
      case CREATE_LANE:
        return ;

      default:
        return state;
    }
  }
};
