import _ from 'lodash';
import { FETCH_POSTS, CREATE, UPDATE, DELETE, LIKE , LOGOUT} from '../constants/actionTypes';

export default (posts = [], action) => {
  //console.log('client/src/reducers/chat/posts/action.payload: ', action.payload,'\n','client/src/reducers/chat/posts/posts: ', posts);
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;

    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    case LOGOUT:
        return posts = [];

    default:
      return posts;
  }
};

