import { UPDATE, FETCH_USERS } from '../constants/actionTypes';

export default (users = [], action) => {
   // console.log('client/src/reducers/chat/users action.payload: ', action.payload,'\n','client/src/reducers/chat/users/users: ', users);
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;        
        case UPDATE: 
            return users.map((user) => (user._id === action.payload._id ? action.payload: user));

        default:
            return users; 
    }
};