import { FETCH_CONVERSATION, LOGOUT } from '../../constants/actionTypes';

export default (conversations = [], action) => {
    switch (action.type) {
      case FETCH_CONVERSATION: 
         return action.payload;
      case LOGOUT:
        return conversations = [];

      default:
        return conversations;
    }
  };
  