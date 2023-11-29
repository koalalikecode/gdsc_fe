import { FETCH_MEMBERS } from '../../utils/string';

const GetMembersReducer = (state={} , action) => {
  switch (action.type) {
    case FETCH_MEMBERS:
      return {...state,...action.payload};
    default:
      return state;
  }
};
export default GetMembersReducer;
