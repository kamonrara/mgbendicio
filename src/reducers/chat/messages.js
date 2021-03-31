import { FETCH_MESSAGES, LOGOUT, RESET_MESSAGES } from '../../constants/actionTypes';

export default (messages = [], action) => {
    switch (action.type) {
      case FETCH_MESSAGES:
        return action.payload;
      case RESET_MESSAGES:
        return messages = [];
      case LOGOUT:
        return messages = [];
      default:
        return messages;
    }
  };