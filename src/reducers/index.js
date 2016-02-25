import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import lanesProvider from 'pods/lanes/provider';

export default combineReducers({
  router,
  lanes: lanesProvider.reducers,
});
