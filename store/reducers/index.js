import { combineReducers } from 'redux';

import GetEventsReducer from './get_events_reducer';
import GetMembersReducer from './get_members_reducer';
import MenuResponseReducer from './menu_response_reducer';

const rootReducer = combineReducers({
  menuResponse: MenuResponseReducer,
  events: GetEventsReducer,
  members:GetMembersReducer
});

export default rootReducer;
