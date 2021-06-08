import { FETCH_MESSAGES, CREATE_MESSAGE, RESET_MESSAGES } from '../../constants/actionTypes';
import * as api from '../../api/index';
// import history from '../../history';

export const getMessages = conversationId => async dispatch => {
        // console.log('PAKI CHECK PO PLEASE: ', conversationId)
    try {
        const { data } = await api.fetchMessages(conversationId);

        dispatch({ type: FETCH_MESSAGES, payload: data});
       // history.push('/chat');

    } catch (error) {
        console.log('[ERROR]-redux-action-chat-message: ', error.name);
    }
};

export const createMessage = message => async dispatch => {
    try {
        const { data } = await api.createMessage(message);
        dispatch({ type: CREATE_MESSAGE, payload: data});

    } catch (error) {
        console.log('action-createMessage error: ',error);
    }
};

export const resetMessages = () => async dispatch => {
    try {

        dispatch({ type: RESET_MESSAGES});

    } catch (error) {
        console.log(error);
    }
};



