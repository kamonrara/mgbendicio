import _ from 'lodash';
import { FETCH_POSTS, FETCH, CREATE, UPDATE, DELETE, LIKE , LOGOUT, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: []}, action) => {
  //console.log('client/src/reducers/chat/posts/action.payload: ', action.payload,'\n','client/src/reducers/chat/posts/posts: ', posts);
  switch (action.type) {

    case START_LOADING: 
      return {...state, isLoading: true }

    case END_LOADING: 
      return {...state, isLoading: false }
    case FETCH:
      return { ...state, post: action.payload};

    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages
      }

    case FETCH_BY_SEARCH:
        return { ...state, posts: action.payload};

    case LIKE:
      return { ... state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};

    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
            // change the post that just received a comment...
            if(post._id === action.payload._id) return action.payload
            
            return post;
        })
      };

    case CREATE:
      return { ...state, posts: [...state.posts, action.payload]};
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload)};

    case LOGOUT:
        return state;

    default:
      return state;
  }
};

