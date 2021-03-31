import {  SET_CONVERSATION_ID, LOGOUT, SET_CONVERSATION_WITH } from '../../constants/actionTypes';

export default (conversation_data = [], action) => {
    switch (action.type) {
        case SET_CONVERSATION_ID:
            return action.payload
        case SET_CONVERSATION_WITH:
            return {...conversation_data, conversation_with: action.payload}
        case LOGOUT:
            return conversation_data = []
      default:
        return conversation_data;
    }
  };
  