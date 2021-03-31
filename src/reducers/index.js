import { combineReducers } from 'redux';
import authReducer from './auth.js';
import conversationsReducer from './chat/conversations.js';
import messagesReducer from './chat/messages.js';
import postsReducer from './posts.js';
import usersReducer from './users.js';

import conversationIdReducer from './chat/conversations-conversation-id.js';

export default combineReducers({ 
    auth: authReducer,
    conversations: conversationsReducer,
    conversation_data: conversationIdReducer,
    messages: messagesReducer,
    posts: postsReducer,
    users: usersReducer

});
