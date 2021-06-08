import { FETCH_CONVERSATION, SET_CONVERSATION_ID, SET_CONVERSATION_WITH, CREATE_CONVERSATION, CREATE_CONVERSATION_AND_MESSAGE, RESET_CONVERSATION_DATA } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const resetConversationData  = () => async dispatch => {
    try {

        dispatch({ type: RESET_CONVERSATION_DATA});

    } catch (error) {
        console.log(error);
    }

};

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
        // console.log('redux/action: conversationAndMessage <outside-try>: ', conversationAndMessage);
    try {
        const { data } = await api.createConversationAndMessage(conversationAndMessage);

        // console.log('redux/action: conversationAndMessage <inside-try> : newly generated conversation ID: ', data._id)
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


