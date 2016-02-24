import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import schema from 'schema';

export default combineReducers({
  router,
  orm: schema.reducer(),
});
