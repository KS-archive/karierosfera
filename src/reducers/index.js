import { combineReducers } from 'redux';
import notificationsReducer from './notifications_reducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export default rootReducer;
