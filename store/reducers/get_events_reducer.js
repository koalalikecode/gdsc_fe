import { FETCH_EVENTS } from "../../utils/string";

const GetEventsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;
    default:
      return state;
  }
};
export default GetEventsReducer;
