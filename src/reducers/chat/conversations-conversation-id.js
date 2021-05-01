import {  SET_CONVERSATION_ID, LOGOUT, SET_CONVERSATION_WITH, RESET_CONVERSATION_DATA } from '../../constants/actionTypes';

export default (conversation_data = [], action) => {
    switch (action.type) {
        case SET_CONVERSATION_ID:
            return action.payload
        case SET_CONVERSATION_WITH:
            console.log('SET_CONVERSATION_WITH::::::: ', conversation_data, '   ', action)
            return {...conversation_data, conversation_with: action.payload}
        case RESET_CONVERSATION_DATA:
            console.log('RESET_CONVERSATION_DATA::::::: ', conversation_data, '   ', action)
            return conversation_data = []
        case LOGOUT:
            return conversation_data = []
      default:
        return conversation_data;
    }
  };
  