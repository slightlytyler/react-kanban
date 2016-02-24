import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducers as lanes } from 'pods/lanes/provider';

export default combineReducers({
  router,
  lanes,
});
