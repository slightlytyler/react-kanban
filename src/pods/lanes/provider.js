// Provider
import { createResourceProvider } from 'react-redux-provide-pattern';

const lanes = createResourceProvider('lanes', 'lane', 'laneKey');
const { SET_LANE } = lanes.constants;

// Actions
import generateId from 'shortid';

lanes.actions.createLane = title => ({
  type: SET_LANE,
  id: generateId(),
  payload: { title },
});

export default lanes;
