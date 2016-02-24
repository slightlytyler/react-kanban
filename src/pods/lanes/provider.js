// Constants
export const CREATE_LANE = 'CREATE_LANE';

// Actions
import generateId from 'shortid';

export const actions = {
  createLane(title) {
    return {
      type: CREATE_LANE,
      id: generateId(),
      title,
    };
  },
};

// Reducers
import { combineReducers } from 'redux';

export const reducers = combineReducers({
  records(state = [], action) {
    switch (action.type) {
      case CREATE_LANE:
        return [...state, action.id];

      default:
        return state;
    }
  },

  recordsById(state = {}, action) {
    switch (action.type) {
      case CREATE_LANE: {
        const { id, title } = action;
        return Object.assign({}, state, {
          [id]: {
            id,
            title,
          },
        });
      }

      default:
        return state;
    }
  },
});

// Selectors
import { createSelector } from 'reselect';

const lanesSelector = state => state.lanes.records;
const lanesByIdSelector = state => state.lanes.recordsById;
const currentIdSelector = (state, props) => props.id;

const findLaneById = createSelector(
  lanesByIdSelector,
  currentIdSelector,
  (lanesById, id) => lanesById[id],
);

export const selectors = {
  lanesSelector,
  lanesByIdSelector,
  findLaneById,
};
