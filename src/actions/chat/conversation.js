import { FETCH_CONVERSATION, SET_CONVERSATION_ID, SET_CONVERSATION_WITH, CREATE_CONVERSATION, CREATE_CONVERSATION_AND_MESSAGE } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const getConversation = (userId) => async (dispatch) => {
    
    try {
        const { data } = await api.fetchConversation(userId);
  
        dispatch({ type: FETCH_CONVERSATION, payload: data});

    } catch (error) {
        console.log('[ERROR][REDUX-ACTION-GET-CONVERSATION]', error.name);
    }
};

export const createConversation = (conversation) => async (dispatch) => {

    try {
        const { data } = await api.createConversation(conversation);
        dispatch({ type: CREATE_CONVERSATION, payload: data })

    } catch (error) {
        console.log('[ERROR][REDUX-ACTION-CREATE-CONVERSATION]', error.name);
    }

}
export const createConversationAndMessage = (conversationAndMessage) => async (dispatch) => {
        console.log('conversationAndMessageeee: ', conversationAndMessage);
    try {
        const { data } = await api.createConversationAndMessage(conversationAndMessage);
        dispatch({ type: CREATE_CONVERSATION_AND_MESSAGE, payload: data })

    } catch (error) {
        console.log('[ERROR][REDUX-ACTION-CREATE-CONVERSATION-AND-MESSAGE]', error.name);
    }

}

export const setConversationId = (payload) =>  {
    return {
        type: SET_CONVERSATION_ID,
        payload
    }
};

export const setConversationWith = (payload) => {
    return {
        type: SET_CONVERSATION_WITH,
        payload
    }
}


